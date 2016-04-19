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
        name        : 'Datenbanken1',
        description : 'Architekturen und Funktionsweise von relationalen Datenbanksystemen kennen und verstehen..',
        questions   : [
            new Question({
                name        : 'Bei welchen Datenbanken/Datenbanksysteme werden die Daten und ihre Beziehungen in Tabellen (Relationen) abgebildet?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'relationalen Datenbanksysteme (RDBS)',
                        correct : true
                    }),
                    new Answer({
                        text    : 'objektrelationale Datenbanksysteme (ORDBS)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'objektorientierte Datenbanksysteme (OODBS)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'hierarchischen Datenbanken',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welche Datenbanken/Systeme sind neuartige Datenbankanwendungen?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Multimediadatenbank',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Oracle Database',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Objektrelationale Datenbank (ORDB)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Microsoft SQL',
                        correct : false
                    })
                ]
            })
            new Question({
                name        : 'Welche Datenbanken/Datenbanksysteme haben ein Datenmodell (Paradigma) in der Art eines Baums?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Hierarchische Datenbanken',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Objektrelationale Datenbanksysteme (ORDBS)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Objektorientierte Datenbanksysteme (OODBS)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Relationale Datenbanksysteme (RDBS)4',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Bei welchen Datenbanken/Datenbanksysteme werden die Daten und ihre Beziehungen in Tabellen (Relationen) abgebildet?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'relationalen Datenbanksysteme (RDBS)',
                        correct : true
                    }),
                    new Answer({
                        text    : 'objektrelationale Datenbanksysteme (ORDBS)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'objektorientierte Datenbanksysteme (OODBS)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'hierarchischen Datenbanken',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Bei welchen Datenbanken/Datenbanksysteme werden zusätzlich zum RDBS Konzepte der Objektorientierung übernommen?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'objektrelationalen Datenbanksysteme (ORDBS)',
                        correct : true
                    }),
                    new Answer({
                        text    : 'relationalen Datenbanksysteme (RDBS)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'hierarchischen Datenbanken',
                        correct : false
                    }),
                    new Answer({
                        text    : 'bjektorientierten Datenbanksysteme (OODBS)',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Abkürzung für ein relationale Datenbanksystem.',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'RDBS',
                        correct : true
                    }),
                    new Answer({
                        text    : 'RDSB',
                        correct : false
                    }),
                    new Answer({
                        text    : 'RDB',
                        correct : false
                    }),
                    new Answer({
                        text    : 'RDBSY',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Abkürzung für ein objektorientiertes Datenbanksystem.',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'OODBS',
                        correct : true
                    }),
                    new Answer({
                        text    : 'OBDB',
                        correct : false
                    }),
                    new Answer({
                        text    : 'OODB',
                        correct : false
                    }),
                    new Answer({
                        text    : 'OODBSYS',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Ein Attribut einer Entity-Menge, welches Primärschlüssel einer anderen Entity-Menge ist, bezeichnet man als Fremdschlüssel. Was ist gemeint?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Schlüssel (key)',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Datenmodell',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Beziehungen (relationships)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Enität (entity)',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Was gibt es zwischen Entitäten, die auch Attribute haben können?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Beziehungen (relationships)',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Attribute',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Schlüssel (key)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Entitäten (entity)',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welcher Typ versteht man als elementare, nicht zusammengesetzte Wertebereiche, wie z.B. INTEGER für ganze Zahlen oder DECIMAL für Zahlen mit Nachkommastellen?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Basisdatentypen',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Basisdatentypen',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Typkonstruktoren',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Wertetyp',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Wie kann man Zeilen aus einer bestehenden Relation auswählen?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Selektion',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Join-Operation',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Projektion',
                        correct : false
                    }),
                    new Answer({
                        text    : 'InnerJoin-Operation',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welches sind klassische Mengenoperationen?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Union, Intersection, Product, Difference',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Intersection, Selection, Division, Difference',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Projection, Difference, Union',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Selection, Division, Difference, Product',
                        correct : false
                    })
                ]
            })
        ]
    }).save();

    var c1 = new Category({
        name        : 'Wirschaftsinformatik1',
        description : 'Die Wirtschaft ist der mit Abstand grösste Anwendungsbereich der Informatik. Das Modul Wirtschaftsinformatik 1 erschliesst dieses Gebiet systematisch.',
        questions   : [
            new Question({
                name        : 'Warum werden Dienstleistungen / Produktionen ins Ausland ausgelagert?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Wegen den hohen Kosten im Inland ist es für viele Unternehmen lukrativ im Ausland zu produzieren.',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Weil man dadurch die Schweizer Wirtschaft stärkt',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Weil man dadurch Steuern sparen kann',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Dadurch kann das Produkt für verschiedene Kulturen passend gestaltet werden',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welche der folgenden Anforderungen gehört nicht zwingend zu den Aktivitäten eines Geschäftsprozesses?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Aktivitäten müssen die Mitarbeitenden motivieren	',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Aktivitäten müssen einen definierten Anfang und ein definiertes Ende haben	',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Aktivitäten müssen wiederholt durchgeführt werden',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Aktivitäten müssen einen Beitrag zur Wertschöpfung leisten	',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welcher Wirtschaftssektor erlebte den höchsten Zuwachs in den letzten 10 Jahren?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Dienstleistung',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Landwirtschaft',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Industrie',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Gewerbe',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welche Akademiker wurden gemäss der Staufenbiel Job Trends Studie im Jahr 2015 über alle Branchen hinweg am wenigsten häufig gesucht?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Naturwissenschaftler',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Informatiker',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Wirtschaftswissenschaftler',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Ingenieure',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Gegeben ist die Preis-Absatz-Funktion p = 100 - 1/3x. Bei welcher Menge (x) erzielt das Unternehmen den höchsten Umsatz?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : '25',
                        correct : true
                    }),
                    new Answer({
                        text    : '150',
                        correct : false
                    }),
                    new Answer({
                        text    : '50',
                        correct : false
                    }),
                    new Answer({
                        text    : '33.33',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Frage1',
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
            }),
            new Question({
                name        : 'Frage2',
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
                name        : 'Frage3',
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
            }),
            new Question({
                name        : 'Frage4',
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
                name        : 'Frage5',
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
            }),
            new Question({
                name        : 'Frage6',
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
                name        : 'Frage7',
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