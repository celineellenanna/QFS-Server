var Log = require('../logs/index');
var User = require('../models/index').User;
var Quiz = require('../models/index').Quiz;
var async = require('async');

var controller = {
    index: function(req, res, next) {
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
                                    {_challengerId: req.params.id, _opponentId: user._id},
                                    {_challengerId: user._id, _opponentId: req.params.id}
                                ]
                            },
                            {
                                $or: [
                                    {status: 'Started'},
                                    {status: 'Waiting'}
                                ]
                            }
                        ]
                    }).then(function (quiz) {
                        if (quiz) {
                            users.splice(index, 1);
                        }
                        cb();
                    });
                }, function(err) {
                    res.send({ "success" : true, "message" : "User nicht gefunden", data : users });
                });
            });
    }
};

module.exports = controller;