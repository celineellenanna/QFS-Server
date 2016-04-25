var Log = require('../logs/index');
var User = require('../models/index').User;
var Quiz = require('../models/index').Quiz;

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
        var users = User.find({ _id: { $ne : req.params.id}, status: 'Activated'}).exec();

        users.then(function(users) {
            users.forEach(function(err, user) {
                var quiz = Quiz.findOne(
                    { $and: [
                        { $or: [
                            { $and: [{challengerId: req.params.id}, {opponentId: user._id}]},
                            { $and: [{challengerId: user._id}, {opponentId: req.params.id}]}
                        ]
                        },
                        { $or: [
                            { status: 'Waiting'},
                            { status: 'Started'}
                        ]}

                    ]}).exec();

                quiz.then(function(quiz) {
                    if(quiz) {
                        users.find({_id: user._id}).remove();
                    }
                }, function(err) {
                    next(err);
                });
            });
            res.send({ "success" : true, "message" : "User nicht gefunden", data : users });

        }, function(err) {
            next(err);
        });
    }
};

module.exports = controller;