var Log = require('../logs/index');
var Quiz = require('../models/index').Quiz;

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
    newRound: function (req, res, next) {
        Quiz.findById(req.params.id, function(err, quiz){
            if(err) next(err);
            quiz.rounds.push();
            quiz.save();
            res.send({ "success" : true, "message" : "Neue Runde erstellt", data : null });
        })

    }
};

module.exports = controller;