var Log = require('../logs/index');
var async = require('async');
var Quiz = require('../models/index').Quiz;
var Category = require('../models/index').Category;
var Question = require('../models/index').Question;
var Round = require('../models/index').Round;
var RoundQuestion = require('../models/index').RoundQuestion;
var UserAnswer = require('../models/index').UserAnswer;
var User = require('../models/index').User;
var Answer = require('../models/index').Answer;
var fs = require('fs');

var populateOptionsQuiz = [
    {
        path: '_challenger'
    },
    {
        path: '_opponent'
    },
    {
        path: '_rounds',
        populate: [
            {
                path:'_category',
                populate: {
                    path: '_questions',
                    populate: {
                        path: '_answers', model: 'Answer'
                    }
                }
            },
            {
                path: '_roundQuestions',
                populate: [
                    {
                        path: '_question',
                        populate: {path: '_answers'}
                    },
                    {
                        path: '_userAnswers',
                        populate: [
                            {path: '_user'},
                            {path: '_answer'}
                        ]
                    }
                ]
            }
        ]
    }
]

var populateOptionsQuizRoundQuestions =  {
    path: '_rounds',
    populate: {
            path: '_roundQuestions',
            populate: {
                    path: '_userAnswers',
                    populate: [
                        {path: '_user'},
                        {path: '_answer'}
                    ]
            }
    }
}

var populateOptionsRound = [
    {
        path:'_category',
        populate: {
            path: '_questions',
            populate: {
                path: '_answers', model: 'Answer'
            }
        }
    },
    {
        path: '_roundQuestions',
        populate: [
            {
                path: '_question',
                populate: {path: '_answers'}
            },
            {
                path: '_userAnswers',
                populate: [
                    {path: '_user'},
                    {path: '_answer'}
                ]
            }
        ]
    }
]

var populateOptionsRoundRoundQuestions = {
    path: '_roundQuestions',
    populate: {
        path: '_userAnswers',
        populate: [
            {path: '_user'},
            {path: '_answer'}
        ]
    }
}


var controller = {
    create: function(req, res, next) {
        Quiz.create({
            _challenger: req.body.challengerId,
            _opponent: req.body.opponentId
        }, function(err, quiz) {
            if(err) next(err);
            Quiz.findOne(quiz)
                .populate(populateOptionsQuiz)
                .exec(function(err, quiz) {
                    if (err) {
                        res.send({"success": false, "message": "Quiz nicht erstellt", data: null });
                    } else {
                        res.send({"success": true, "message": "Quiz erstellt", data: quiz});
                    }
                });
        });
    },
    get: function(req, res, next) {
        Quiz.findById(req.params.id)
            .populate(populateOptionsQuiz)
            .exec(function(err, quiz) {
                if(err) next(err);
                if(quiz) {
                    res.send({ "success" : true, "message" : "Quiz gefunden", data : quiz });
                } else {
                    res.send({ "success" : false, "message" : "Quiz nicht gefunden", data : null });
                }
            });
    },
    getOpen: function (req, res, next) {
        Quiz.find({
            $or: [
                {_challenger: req.params.id, status: 'Open'},
                {_opponent: req.params.id, status: 'Open'}
            ]
        })
        .populate(populateOptionsQuiz)
        .exec(function(err, quizzes) {
            if(err) next(err);
            if (quizzes) {
                res.send({ "success" : true, "message" : "Quizzes gefunden", data : quizzes });
            } else {
                res.send({ "success" : false, "message" : "Keine Quiz gefunden", data : null });
            }
        });
    },
    getRunning: function (req, res, next) {
        Quiz.find({
                $or: [
                    {_challenger: req.params.id, status: 'WaitingForOpponent'},
                    {_challenger: req.params.id, status: 'WaitingForChallenger'},
                    {_opponent: req.params.id, status: 'WaitingForOpponent'},
                    {_opponent: req.params.id, status: 'WaitingForChallenger'}
                ]
            })
            .populate(populateOptionsQuiz)
            .exec(function(err, quizzes) {
                if(err) next(err);
                if (quizzes) {
                    res.send({ "success" : true, "message" : "Quizzes gefunden", data : quizzes });
                } else {
                    res.send({ "success" : false, "message" : "Keine Quiz gefunden", data : null });
                }
        });
    },
    getFinished: function (req, res, next) {
        Quiz.find({
                $or: [
                    {_challenger: req.params.id, status: 'Canceled'},
                    {_opponent: req.params.id, status: 'Canceled'},
                    {_challenger: req.params.id, status: 'Finished'},
                    {_opponent: req.params.id, status: 'Finished'}
                ]
            })
            .populate(populateOptionsQuiz)
            .exec(function(err, quizzes) {
                if(err) next(err);
                if (quizzes) {
                    res.send({ "success" : true, "message" : "Quizzes gefunden", data : quizzes });
                } else {
                    res.send({ "success" : false, "message" : "Keine Quiz gefunden", data : null });
                }
        });
    },
    reject: function(req, res, next) {
        Quiz.findById(req.body.id, function(err, quiz) {
            if(err) next(err);
            quiz.status = 'Canceled';
            quiz.save();
            res.send({ "success" : true, "message" : "Quiz beendet", data : null });
        });
    },
    accept: function(req, res, next) {
        Quiz.findById(req.body.id, function(err, quiz) {
            if(err) next(err);
            quiz.status = 'WaitingForOpponent';
            quiz.save();
            res.send({ "success" : true, "message" : "Quiz gestartet", data : null });
        });
    },
    createRound: function (req, res, next) {
        var quizId = req.body.quizId;
        var categoryId = req.body.categoryId;
        var increment = 0;

        Round.create({
            _category: categoryId
        }).then(function(round) {
            Category.find(categoryId)
                .exec(function(err, category) {
                    Question.findRandom(category._questions)
                        .limit(3)
                        .exec(function(err, questions) {
                            async.forEachOf(questions, function(question, index, cb) {
                                RoundQuestion.create({
                                    sequenceNo: increment++,
                                    _question: question._id
                                }, function(err, roundQuestion) {
                                    round._roundQuestions.push(roundQuestion._id);
                                }).then(function(err) {
                                    cb();
                                });
                            }, function(err) {
                                round.save();
                                Quiz.findById(quizId, function(err, quiz) {
                                    quiz._rounds.push(round._id);
                                    quiz.save();
                                    Round.findById(round._id)
                                        .populate(populateOptionsRound)
                                        .exec(function(err, round) {
                                            res.send({"success": true, "message": "Runde gestartet", data: round});
                                        });
                                });
                            });
                        });
                });
        });
    },
    getCategories: function (req, res, next) {
        Category.findRandom()
            .limit(3)
            .populate({path: '_questions', model: 'Question',
                populate: {path: '_answers', model: 'Answer'}
            })
            .exec(function (err, categories) {
                if(err) console.log(err);
                res.send({ "success" : true, "message" : "3 Kategorien", data: categories});
            });
    },
    getRound: function (req, res, next) {
        Round.findById(req.params.id)
            .populate(populateOptionsRound)
            .exec(function(err, round) {
                res.send({ "success" : true, "message" : "Runde gefunden", data: round });
            });
    },
    createUserAnswer: function (req, res, next) {
        var quizId = req.body.quizId;
        var roundId = req.body.roundId;
        var roundQuestionId = req.body.roundQuestionId;;

        UserAnswer.create({
            timeToAnswer: req.body.timeToAnswer,
            status: req.body.status,
            _answer: req.body.answerId,
            _user: req.body.userId
        }, function(err, userAnswer) {
            RoundQuestion.findById(roundQuestionId)
                .then(function (roundQuestion) {
                    if (err) console.log(err);
                    roundQuestion._userAnswers.push(userAnswer._id);
                    roundQuestion.save();

                    changeQuizStatus(quizId, function(success, message) {
                        res.send({"success": success, "message": message, data: null});
                    });
                });
        });
    },
    createUserAnswerTimeElapsed: function (req, res, next) {
        var quizId = req.body.quizId;
        var roundId = req.body.roundId;
        var roundQuestionId = req.body.roundQuestionId;

        UserAnswer.create({
            timeToAnswer: req.body.timeToAnswer,
            status: false,
            _user: req.body.userId
        }, function(err, userAnswer) {
            RoundQuestion.findById(roundQuestionId)
                .then(function (roundQuestion) {
                    if (err) console.log(err);
                    roundQuestion._userAnswers.push(userAnswer._id);
                    roundQuestion.save();

                    changeQuizStatus(quizId, function(success, message, data) {
                        res.send({"success": success, "message": message, data: null});
                    });
                });
        });
    },
    getFinishedAnswerCount: function(req, res, next) {
        var quizId = req.params.quizId;

        /*Quiz.findById(quizId)
            .populate(populateOptionsQuizRoundQuestions)
            .exec(function (err, quiz) {
                if(quiz._rounds.length === 0) {
                    res.send({"success": true, message: "Noch keine Antworten", data: "0"});
                } else {
                    var round = quiz._rounds[quiz._rounds.length - 1];
                    Round.findById(round._id)
                        .populate(populateOptionsRoundRoundQuestions)
                        .then(function(round) {
                            async.forEachOf(round._roundQuestions, function (roundQuestion, index, cb0) {
                                async.forEachOf(roundQuestion._userAnswers, function (userAnswer, index, cb1) {
                                    countAnswers++;
                                    cb1();
                                }, function (err) {
                                    cb0();
                                });
                            }, function (err) {
                                if (err) {
                                    res.send({"success": false, message: "Fehler", data: "0"});
                                } else {
                                    res.send({"success": true, message: "Anzahl beantworteter Fragen", data: countAnswers});
                                }
                            });
                        });
                }
            });*/

        countUserAnswers(quizId, function(countUserAnswers) {
            res.send({"success": true, "message": "CountUserAnswers", data: countUserAnswers});
        });
    }
};

function countUserAnswers(quizId, cb) {
    var countAnswers = 0;

    Quiz.findById(quizId)
        .populate(populateOptionsQuizRoundQuestions)
        .exec(function (err, quiz) {
            if(quiz._rounds.length === 0) {
                cb(0);
            } else {
                async.forEachOf(quiz._rounds, function (round, index, cb0) {
                    async.forEachOf(round._roundQuestions, function (roundQuestion, index, cb1) {
                        async.forEachOf(roundQuestion._userAnswers, function (userAnswer, index, cb2) {
                            countAnswers++;
                            cb2();
                        }, function(err) {
                            cb1();
                        });
                    }, function(err) {
                        cb0();
                    });
                }, function(err) {
                    cb(countAnswers);
                });
            };
        });
}

function changeQuizStatus(quizId, cb) {
    countUserAnswers(quizId, function(countAnswers) {
        if(countAnswers % 3 === 0 && countAnswers < 36) {
            changeQuizStatusForPlayer(quizId, function () {
                cb(true, "QuizStatusForPlayer changed", countAnswers);
            });
        } else if(countAnswers == 36) {
            changeQuizStatusForFinished(quizId, function () {
                cb(true, "QuizStatusForFinished changed", countAnswers);
            });
        } else {
            cb(true, "Nothing done", 0);
        }
    });
}

function changeQuizStatusForPlayer(quizId, cb) {
    Quiz.findById(quizId, function (err, quiz) {
        if(quiz.status === "WaitingForOpponent") {
            quiz.status = "WaitingForChallenger";
        } else {
            quiz.status = "WaitingForOpponent";
        }
        quiz.save();
        cb();
    });
}

function changeQuizStatusForFinished(quizId, cb) {
    Quiz.findById(quizId, function (err, quiz) {
        quiz.status = "Finished";
        quiz.save();
        cb();
    });
}

module.exports = controller;