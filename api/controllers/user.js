var Log = require('../logs/index');
var User = require('../models/index').User;

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
    destroy: function(req, res, next) {
        User.findById(req.params.id, function(err, user) {
            if(err) next(err);
            user.status = 'inactivated';
            user.save();
            res.send({ "success" : true, "message" : "User gelöscht", data : null });
        });
    }
};

module.exports = controller;