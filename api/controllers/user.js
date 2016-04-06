var Log = require('../logs/index');
var User = require('../models/index').User;

var controller = {
    index: function(req, res, next) {
        User.find(function(err, user) {
            if(err) next(err);
            res.send(user);
        });
    },
    get: function(req, res, next) {
        User.findById(req.params.id, function(err, user) {
            if(err) next(err);
            res.send(user);
        });
    },
    destroy: function(req, res, next) {
        User.findById(req.params.id, function(err, user) {
            if(err) next(err);
            user.status = 'inactivated';
            user.save();
            res.send({ "status" : true, "message" : "User erfolgreich gelöscht" });
        });
    }
};

module.exports = controller;