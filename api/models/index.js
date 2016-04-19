var Log = require('../logs/index');

var mongoose = require('mongoose');
var random = require('mongoose-random');
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

    var db1 = new Category({
        name    : 'Datenbanken1'
    });

    var db1Q1 = new Question({
        name        : 'Bei welchen Datenbanken/Datenbanksysteme werden die Daten und ihre Beziehungen in Tabellen (Relationen) abgebildet?',
        status      : 'Created',
        
        _category : db1._id
    });

    var db1A1 = new Answer({
        text    : 'relationalen Datenbanksysteme (RDBS)',
        correct : true,
        _question : db1Q1._id
    });

    var db1A2 = new Answer({
        text    : 'objektrelationale Datenbanksysteme (ORDBS)',
        correct : false,
        _question : db1Q1._id
    });

    var db1A3 = new Answer({
        text    : 'objektorientierte Datenbanksysteme (OODBS)',
        correct : false,
        _question : db1Q1._id
    });

    var db1A4 = Answer({
        text    : 'hierarchischen Datenbanken',
        correct : false,
        _question : db1Q1._id
    });

    var db1Q2 = new Question({
        name        : 'Welche Datenbanken/Systeme sind neuartige Datenbankanwendungen?',
        status      : 'Created',

        _category : db1._id
    });

    var db1A5 = new Answer({
        text    : 'Multimediadatenbank',
        correct : true,
        _question : db1Q2._id
    });

    var db1A6 = new Answer({
        text    : 'Oracle Database',
        correct : false,
        _question : db1Q2._id
    });

    var db1A7 = new Answer({
        text    : 'Objektrelationale Datenbank (ORDB)',
        correct : false,
        _question : db1Q2._id
    });

    var db1A8 = Answer({
        text    : 'Microsoft SQL',
        correct : false,
        _question : db1Q2._id
    });

    var db1Q3 = new Question({
        name        : 'Welche Datenbanken/Datenbanksysteme haben ein Datenmodell (Paradigma) in der Art eines Baums?',
        status      : 'Created',

        _category : db1._id
    });

    var db1A9 = new Answer({
        text    : 'Hierarchische Datenbanken',
        correct : true,
        _question : db1Q3._id
    });

    var db1A10 = new Answer({
        text    : 'Objektrelationale Datenbanksysteme (ORDBS)',
        correct : false,
        _question : db1Q3._id
    });

    var db1A11 = new Answer({
        text    : 'Objektorientierte Datenbanksysteme (OODBS)',
        correct : false,
        _question : db1Q3._id
    });

    var db1A12 = Answer({
        text    : 'Relationale Datenbanksysteme (RDBS)4',
        correct : false,
        _question : db1Q3._id
    });


    db1Q1.answers.push(db1A1._id, db1A2._id, db1A3._id, db1A4._id);
    db1Q2.answers.push(db1A5._id, db1A6._id, db1A7._id, db1A8._id);
    db1Q3.answers.push(db1A9._id, db1A10._id, db1A11._id, db1A12._id);

    db1.questions.push(db1Q1._id);
    db1.questions.push(db1Q2._id);
    db1.questions.push(db1Q3._id);

    db1A1.save();
    db1A2.save();
    db1A3.save();
    db1A4.save();
    db1A5.save();
    db1A6.save();
    db1A7.save();
    db1A8.save();
    db1A9.save();
    db1A10.save();
    db1A11.save();
    db1A12.save();

    db1Q1.save();
    db1.save();

    db1Q1.answers.push(db1A1._id, db1A2._id, db1A3._id, db1A4._id);
    db1.questions.push(db1Q1._id);
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
//categorySchema.questions.plugin(random, {path:'r'});

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
    Quiz        : Quiz,
    Category    : Category,
    Question    : Question
    
}