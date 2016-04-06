var Log = require('../logs/index');
var User = require('../models/index').User;

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var theUser;

User.findOne({
    username: 'user0'
}, function(err, user) {
    if (err) return done(err);
    theUser = user;
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({
            username: username
        }, function(err, user) {
                if (err) return done(err);
                if (!user) {
                    return done(null, false, "Benutzername ist falsch");
                }
                if (!user.validPassword(password)) {
                    return done(null, false, "Passwort ist falsch");
                }
                return done(null, user);
         });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        if (err) done(err);
        done(null, user);
    });
});

var controller = {
    login: function(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) {
                return res.send({ "success" : false, "message" : info, "data" : null });
            }
            req.login(user, function(err) {
                if(err) { return next(err); }
                return res.send({ "success" : true, "message" : "Registrierung war erfolgreich", "data" : user });
            });
        })(req, res, next);
    },
    register: function(req, res, next) {
        User.create({
            firstname   : req.body.firstname,
            lastname    : req.body.lastname,
            username    : req.body.username,
            password    : req.body.password,
            email       : req.body.email
        }, function(err, user) {
            if(err) next(err);
            if(!user) {
                res.send({ "success" : false, "message" : "Registrierung ist fehlgeschlagen", "data" : null });
            } else {
                res.send({ "success" : false, "message" : "Registrierung war erfolgreich", "data" : user });
            }
        });
    },
    logout: function(req, res, next) {
        req.logout();
        res.send({ "success" : true, "message" : "Ausloggen war erfolgreich", "data" : null });
    }
};

module.exports = controller;