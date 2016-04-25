var Log = require('../logs/index');
var Quiz = require('../models/index').Quiz;
var Category = require('../models/index').Category;
var Question = require('../models/index').Question;

var controller = {
    create: function(req, res, next) {
        Quiz.create({
            challengerId: req.body.challengerId,
            opponentId: req.body.opponentId
        }, function(err,quiz) {
        if (err)
            Log.error(err);
        else
            res.send({ "success" : true, "message" : "Quiz erstellt", data : quiz });
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
    cancel: function(req, res, next) {
        Quiz.findById(req.params.id, function(err, quiz) {
            if(err) next(err);
            quiz.status = 'Canceled';
            quiz.save();
            res.send({ "success" : true, "message" : "Quiz beendet", data : null });
        });
    },
    createRound: function (req, res, next) {
        Quiz.findById(req.params.id, function(err, quiz){
            if(err) next(err);
            quiz.rounds.push();
            quiz.save();
            res.send({ "success" : true, "message" : "Neue Runde erstellt", data : null });
        })
    },
    getCategories: function (req, res, next) {
        Category.findRandom().limit(3).exec(function (err, categories) {
            console.log(categories);
            res.send({ "success" : true, "message" : "3 Kategorien", data: categories});

        });
    },
    getQuestions: function (req, res, next) {
        Question.findById(req.params.id, function (err, question) {
            res.send({ "success" : true, "message" : "3 Kategorien", data: question});
        });
        /*Category.findById(req.params.id, function (err, category) {
            category.questions.findRandom().limit(3).exec(function (err, questions) {
                res.send({ "success" : true, "message" : "3 Kategorien", data: questions});
                
            });
        });*/
    }
};

module.exports = controller;