var Log = require('../logs/index');
var User = require('../models/index').User;

var controller = {
    index: function(req, res, next) {
        res.users = User.findAll().then(function(data) {
            res.users = data;
            next();
        }).catch(function(err) {
            Log.write('Database', err.name, err.message);
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