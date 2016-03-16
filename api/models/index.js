var Log = require('../logs/index');

var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.db.database, process.db.username, process.db.password, {
    host    : process.db.host,
    dialect : process.db.dialect,
    logging : process.db.logging
});

var User = sequelize.define('user', {
    username            : {
        type                : Sequelize.STRING,
        unique              : true,
        allowNull           : false
    },
    password            : {
        type                : Sequelize.STRING,
        unique              : false,
        allowNull           : false
    },
    email               : {
        type                : Sequelize.STRING,
        unique              : true,
        allowNull           : false
    },
    verificationToken   : {
        type                : Sequelize.STRING,
        unique              : false,
        allowNull           : true
    },
    passwordResetToken  : {
        type                : Sequelize.STRING,
        unique              : false,
        allowNull           : true
    },
    status              : {
        type                : Sequelize.ENUM('registered', 'activated', 'deleted'),
        defaultValue        : 'registered',
        allowNull           : false
    }
}, {
    instanceMethods     : {
        validPassword       : function(password) {
            return this.password === password;
        }
    },
    classMethods: {
        register: function(username, password, email, next) {
            User.create({ username: username, password: password, email: email })
                .then(function(user) {
                    Log.info('Database', 'Registration successfully for user <' + user.username + '>');
                    next(null, 'Registration successfully for user <' + user.username + '>');
                })
                .catch(function(err) {
                    next(err, null);
                });
        }
    }
});

sequelize.sync({force: true}).then(function(sequelizeModel) {
    Log.info('Database', 'Model synchronization successfully');
}).catch(function(err) {
    Log.error(err);
});

module.exports = {
    User        : User
}