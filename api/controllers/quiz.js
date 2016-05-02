var Log = require('../logs/index');
var async = require('async');
var Quiz = require('../models/index').Quiz;
var Category = require('../models/index').Category;
var Question = require('../models/index').Question;
var Round = require('../models/index').Round;
var RoundQuestion = require('../models/index').RoundQuestion;

var controller = {
    create: function(req, res, next) {
        Quiz.create({
            _challengerId: req.body.challengerId,
            _opponentId: req.body.opponentId
        }, function(err, quiz) {
            Quiz.findOne(quiz)
                .populate('_challengerId')
                .populate('_opponentId')
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
        Quiz.findById(req.params.id, function(err, quiz) {
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
                {_challengerId: req.params.id, status: 'Open'},
                {_opponentId: req.params.id, status: 'Open'}
            ]
        })
        .populate('_challengerId')
        .populate('_opponentId').exec(function(err, quizzes) {
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
                    {_challengerId: req.params.id, status: 'WaitingForOpponent'},
                    {_challengerId: req.params.id, status: 'WaitingForChallenger'},
                    {_opponentId: req.params.id, status: 'WaitingForOpponent'},
                    {_opponentId: req.params.id, status: 'WaitingForOpponent'}
                ]
            })
            .populate('_challengerId')
            .populate('_opponentId').exec(function(err, quizzes) {
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
                    {_challengerId: req.params.id, status: 'Canceled'},
                    {_opponentId: req.params.id, status: 'Canceled'},
                    {_challengerId: req.params.id, status: 'Finished'},
                    {_opponentId: req.params.id, status: 'Finished'}
                ]
            })
            .populate('_challengerId')
            .populate('_opponentId').exec(function(err, quizzes) {
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
        var increment = 1;

        Round.create({
            _category: categoryId
        }).then(function(round) {
            Question.findRandom({ _category: categoryId })
                .limit(3).exec(function (err, questions) {
                    async.forEachOf(questions, function(question, index, cb) {
                        RoundQuestion.create({
                            sequenceNo: increment++,
                            _question: question._id
                        }, function(err, roundQuestion) {
                            round._roundQuestions.push(roundQuestion._id);
                            round.save();

                            cb();
                        });
                    }, function(err) {
                        Quiz.findOne({ _id: quizId }, function(err, quiz) {
                            if(err) next(err);
                            quiz[0].rounds.push(round._id);
                            quiz[0].save();
                        }, function(err, quiz) {
                            console.log(quiz);
                            res.send({ "success" : true, "message" : "3 Fragen", data: questions });
                        });
                    });
                });
        });
    },
    getCategories: function (req, res, next) {
        Category.findRandom().limit(3).exec(function (err, categories) {
            console.log(categories);
            res.send({ "success" : true, "message" : "3 Kategorien", data: categories});

        });
    },
    getQuestions: function (req, res, next) {
        Question.findRandom({ _category: req.params.id }).limit(3).exec(function (err, questions) {
            res.send({ "success" : true, "message" : "3 Kategorien", data: questions});

        });
    },
    putAnswer: function (req, res, next) {
        //Quiz.f
    }
    
};

module.exports = controller;