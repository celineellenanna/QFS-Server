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
        email       : 'user0@hsr.ch',
        status      : 'Activated'
    }, function(err) {
        if (err) Log.error(err);
        else Log.info('User created successfully');
    });
    
    User.create({
        firstname   : 'firstname_user1',
        lastname    : 'lastname_user1',
        username    : 'user1',
        password    : 'pass1',
        email       : 'user1@hsr.ch',
        status      : 'Activated'
    }, function(err) {
        if (err) Log.error(err);
        else Log.info('User created successfully');
    });

    User.create({
        firstname   : 'firstname_user2',
        lastname    : 'lastname_user2',
        username    : 'user2',
        password    : 'pass2',
        email       : 'user2@hsr.ch',
        status      : 'Activated'
    }, function(err) {
        if (err) Log.error(err);
        else Log.info('User created successfully');
    });

    User.create({
        firstname   : 'firstname_user3',
        lastname    : 'lastname_user3',
        username    : 'user3',
        password    : 'pass3',
        email       : 'user3@hsr.ch',
        status      : 'Activated'
    }, function(err) {
        if (err) Log.error(err);
        else Log.info('User created successfully');
    });

    var c1 = new Category({
        name        : 'Category1',
        description : 'Category1 description',
        questions   : [
            new Question({
                name        : 'Frage1',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Antwort1',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Antwort2',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Antwort3',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Antwort4',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Frage2',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Antwort5',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Antwort6',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Antwort7',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Antwort8',
                        correct : false
                    })
                ]
            })
        ]
    }).save();


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
    answers: [answerSchema]
});

var categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String

    },
    questions: [questionSchema]
});

var userAnswerSchema = mongoose.Schema({
    timeToAnswer: {
        type: Date,
        required: true
    },
    answer: {
        type: mongoose.Schema.ObjectId,
        ref: 'Answer',
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
});

var roundQuestionSchema = mongoose.Schema({
    sequenceNo: {
        type: Number,
        required: true
    },
    question: {
        type: mongoose.Schema.ObjectId,
        ref: 'Question',
        required: true
    },
    userAnswers: [userAnswerSchema]
});

var roundSchema = mongoose.Schema({
    start: {
        type: Date
    },
    end: {
        type: Date
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
    },
    questions: [roundQuestionSchema]
});

var quizSchema = mongoose.Schema({
    challengerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    opponentId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['Started', 'Finished', 'Canceled', 'Waiting'],
        default: 'Started'
    },
    rounds: [roundSchema]

});

var ratingSchema = mongoose.Schema({
    ratingValue: {
        type: String,
        enum: ['Highest', 'AboveAverage', 'Average', 'BelowAverage', 'Lowest']
    },
    comment: {
        type: String
    },
    user: {
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

module.exports = {
    User        : User,
    Quiz        : Quiz
}