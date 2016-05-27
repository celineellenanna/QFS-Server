var Log = require('../logs/index');
var User = require('../models/index').User;
var Quiz = require('../models/index').Quiz;
var async = require('async');

var controller = {
    getAll: function(req, res, next) {
        User.find(function(err, users) {
            if(err) next(err);
            if(users) {
                res.send({ "success" : true, "message" : "User gefunden", data : users });
            } else {
                res.send({ "success" : false, "message" : "User nicht gefunden", data : null });
            }
        });
    },
    get: function(req, res, next) {
        User.findById(req.params.id, function(err, user) {
            if(err) next(err);
            if(user) {
                res.send({ "success" : true, "message" : "User gefunden", data : user });
            } else {
                res.send({ "success" : false, "message" : "User nicht gefunden", data : null });
            }
        });
    },
    findOpponent: function(req, res, next) {
        User.find({_id: {$ne: req.params.id}, status: 'Activated'})
            .then(function (users) {
                async.forEachOf(users, function(user, index, cb) {
                    Quiz.findOne({
                        $and: [
                            {
                                $or: [
                                    {_challenger: req.params.id, _opponent: user._id},
                                    {_challenger: user._id, _opponent: req.params.id}
                                ]
                            },
                            {
                                $or: [
                                    {status: 'Open'},
                                    {status: 'WaitingForChallenger'},
                                    {status: 'WaitingForOpponent'}
                                ]
                            }
                        ]
                    }).then(function (quiz) {
                        if (quiz) {
                            users.splice(users.indexOf(user), 1);
                        }
                    }).then(function() {
                        cb();
                    });
                }, function(err) {
                    res.send({ "success" : true, "message" : "Gegner gefunden", data : users });
                });
            });
    }
};

module.exports = controller;