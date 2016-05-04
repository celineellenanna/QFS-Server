var Log = require('../logs/index');

var mongoose = require('mongoose');
var random = require('mongoose-random');
mongoose.connect(process.db.connection);

var db = mongoose.connection;

db.on('error', function() {
    Log.error('Database connection failed');
});

var userSchema = mongoose.Schema({
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: {
                validator: function(v) {
                    return new RegExp("[a-zA-Z0-9\.]*@hsr.ch").test(v);
                },
                message: '{VALUE} ist keine gültige Email adresse!'
            }
        },
        username: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['Registered', 'Activated', 'Deleted'],
            default: 'Registered'
        },
        role: {
            type: String,
            enum: ['Player', 'Administrator', 'Moderator'],
            default: 'Player'
        }
    },
    {
        timestamps: true
    }
);

userSchema.methods.fullName = function() {
    return this.firstname + ', ' + this.lastname;
};

userSchema.methods.validPassword = function(password) {
    return this.password === password;
};

var answerSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    correct: {
        type: Boolean
    }
    /*,
    _question : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }*/
});

var questionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Created', 'Approved', 'Rejected', 'Deleted'],
        default: 'Created'
    },
    _answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer'
    }]
    /*,
    _category : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }*/
});

questionSchema.statics.random = function(callback) {
    this.count(function(err, count) {
        if (err) {
            return callback(err);
        }
        var rand = Math.floor(Math.random() * count);
        this.findOne().skip(rand).exec(callback);
    }.bind(this));
};

questionSchema.plugin(random, { path: 'r' });


var categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    _questions : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }]
});

categorySchema.plugin(random, { path: 'r' });

var userAnswerSchema = mongoose.Schema({
    timeToAnswer: {
        type: Number,
        required: true
    },
    _answer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer',
        required: true
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

var roundQuestionSchema = mongoose.Schema({
    sequenceNo: {
        type: Number,
        required: true
    },
    _question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    },
    _userAnswers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserAnswer'
    }]
});

var roundSchema = mongoose.Schema({
    _category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
    },
    _roundQuestions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RoundQuestion'
    }]
    
}, {
    timestamps: true
});

var quizSchema = mongoose.Schema({
    _challenger: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    _opponent: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['Open', 'Finished', 'Canceled', 'WaitingForChallenger', 'WaitingForOpponent'],
        default: 'Open'
    },
    _rounds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Round'
    }]
}, {
    timestamps: true
});

var ratingSchema = mongoose.Schema({
    ratingValue: {
        type: String,
        enum: ['Highest', 'AboveAverage', 'Average', 'BelowAverage', 'Lowest']
    },
    comment: {
        type: String
    },
    _user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
});

var User = mongoose.model('User', userSchema);
var Quiz = mongoose.model('Quiz', quizSchema);
var Category = mongoose.model('Category', categorySchema);
var Question = mongoose.model('Question', questionSchema);
var Answer = mongoose.model('Answer', answerSchema);
var Round = mongoose.model('Round', roundSchema);
var RoundQuestion = mongoose.model('RoundQuestion', roundQuestionSchema);
var UserAnswer = mongoose.model('UserAnswer', userAnswerSchema);

var Data = require('./data')(db, User, Quiz, Category, Question, Answer);

module.exports = {
    User        : User,
    Quiz        : Quiz,
    Category    : Category,
    Question    : Question,
    Answer      : Answer,
    Round       : Round,
    RoundQuestion : RoundQuestion,
    UserAnswer  : UserAnswer
}