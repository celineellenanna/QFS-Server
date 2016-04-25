var Log = require('../logs/index');
var Quiz = require('../models/index').Quiz;
var Category = require('../models/index').Category;
var Question = require('../models/index').Question;
var Round = require('../models/index').Round;

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
    accept: function(req, res, next) {
        Quiz.findById(req.params.id, function(err, quiz) {
            if(err) next(err);
            quiz.status = 'Waiting';
            quiz.save();
            res.send({ "success" : true, "message" : "Quiz gestartet", data : null });
        });
    },
    createRound: function (req, res, next) {
        Round.create({
            start: Date.now(),
            _category: req.params.cid

        }, function (err, round) {
            if (err)
                Log.error(err);
            else{

            }

        });
        Quiz.findById(req.params.id, function(err, quiz){
            if(err) next(err);
            var r = new Round();
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
        Question.findRandom({ _category: req.params.id }).limit(3).exec(function (err, questions) {
            res.send({ "success" : true, "message" : "3 Kategorien", data: questions});

        });
    },
    putAnswer: function (req, res, next) {
        //Quiz.f
        
    }
    
};

module.exports = controller;