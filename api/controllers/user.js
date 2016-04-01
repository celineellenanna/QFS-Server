var Log = require('../logs/index');
var User = require('../models/index').User;

var controller = {
    index: function(req, res, next) {
        User.find(function(err, data) {
            if(err) next(err);
            res.send(data);
        });
    },
    get: function(req, res, next) {
        User.findById(req.params.id, function(err, data) {
            if(err) next(err);
            res.send(data);
        });
    },
    destroy: function(req, res, next) {
        User.findById(req.params.id, function(err, data) {
            if(err) next(err);
            data.status = 'inactivated';
            data.save();
            res.send({ "status" : true });
        });
    }
};

module.exports = controller;