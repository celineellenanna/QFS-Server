var Log = require('../logs/index');
var User = require('../models/index').User;

var controller = {
    index: function(req, res, next) {
        res.users = User.find(function(err, data) {
            if(err) next(err);
            res.users = data;
            next();
        });
    },
    get: function() {
        return "get";
    },
    add: function() {
        return "add";
    },
    edit: function() {
        return "edit";
    },
    destroy: function() {
        return "remove";
    }
};

module.exports = controller;