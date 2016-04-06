var Log = require('../logs/index');

var mongoose = require('mongoose');
mongoose.connect(process.db.connection);

var db = mongoose.connection;

db.on('error', function() {
    Log.error('Database connection failed');
});

db.once('open', function() {
    Log.info('Database connection successfully');
    User.create({
        firstname   : 'firstname_user0',
        lastname    : 'lastname_user0',
        username    : 'user0',
        password    : 'pass0',
        email       : 'user0@test.com',
        status      : 'activated'
    }, function(err) {
        if (err) Log.error(err);
        else Log.info('User created successfully');
    });
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
            required: true
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
            enum: ['registered', 'activated', 'deleted'],
            default: 'registered'
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

userSchema.statics.register = function(firstname, lastname, username, password, email, cb) {
    User.create({
        firstname   : firstname,
        lastname    : lastname,
        username    : username,
        password    : password,
        email       : email
    }, function(err, user) {
        if(err) cb(err);
        cb(null, user);
    });
};

var categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String

    }
});

var questionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Created', 'Approved', 'Rejected', 'Deleted']
    },
    answers: [answerSchema]
});

var answerSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    correct: {
        type: bool
    }
});

var quizSchema = mongoose.Schema({
    user1: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    user2: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['Started', 'Finished', 'Canceled', 'Waiting']
    },
    rounds: [roundSchema]

});

var roundSchema = mongoose.Schema({
    start: {
        type: Date
    },
    end: {
        type: Date
    },
    category: {
        type: Category
    },
    questions: [roundQuestionSchema]
});

var roundQuestionSchema = mongoose.Schema({
    sequenceNo: {
        type: Number,
        required: true
    },
    question: {
        type: Schema.ObjectId,
        ref: 'Question',
        required: true
    },
    userAnswers: [userAnswerSchema]


});

var userAnswerSchema = mongoose.Schema({
    timeToAnswer: {
        type: Date,
        required: true
    },
    answer: {
        type: Schema.ObjectId,
        ref: 'Answer',
        required: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    }
});



var User = mongoose.model('User', userSchema);
var Quiz = mongoose.model('Quiz', quizSchema);

module.exports = {
    User        : User,
    Quiz        : Quiz
}