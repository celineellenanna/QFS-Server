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
    },
    _question : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }
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
    answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
    _category : { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category' 
    }

});

questionSchema.plugin(random, { path: 'r' });


var categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    questions : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }]
});

categorySchema.plugin(random, { path: 'r' });

var userAnswerSchema = mongoose.Schema({
    timeToAnswer: {
        type: Date,
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
    userAnswers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserAnswer'
    }]
});

var roundSchema = mongoose.Schema({
    start: {
        type: Date
    },
    end: {
        type: Date
    },
    _category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
    },
    userAnswers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }]
});

var quizSchema = mongoose.Schema({
    _challengerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    _opponentId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['Open', 'Finished', 'Canceled', 'WaitingForChallenger', 'WaitingForOpponent'],
        default: 'Open'
    },
    rounds: [{
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

var Data = require('./data')(db, User, Quiz, Category, Question, Answer);

module.exports = {
    User        : User,
    Quiz        : Quiz,
    Category    : Category,
    Question    : Question,
    Answer      : Answer,
    Round       : Round
}