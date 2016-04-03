var Log = require('../logs/index');
var User = require('../models/index').User;

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({
            username: username
        }, function(err, user) {
                if (err) return done(err);
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (!user.validPassword(password)) {
                    return done(null, false, { message: 'Incorrect password.' });
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
            if (!user) { return res.send({ "status" : false, "message" : "Benutzername oder Passwort ist falsch" });}
            req.login(user, function(err) {
                res.send({ "status" : true, "message" : "Login war erfolgreich" });
            });
        })(req, res, next);
    },
    register: function(req, res, next) {
        User.register(req.body.firstname, req.body.lastname, req.body.username, req.body.password, req.body.email, function(err, message) {
            if(err) res.send({ "status" : false, "message" : "Registrierung fehlgeschlagen" });
            res.send({ "status" : true, "message" : "Registrierung war erfolgreich" });
        });
    },
    logout: function(req, res, next) {
        req.logout();
        res.send({ "status" : true, "message" : "Ausloggen war erfolgreich" });
    },
    isLoggedIn: function(req, res, next) {
        if(req.user) res.send({ "status" : true });
        else res.send({ "status" : false });
    }
};

module.exports = controller;