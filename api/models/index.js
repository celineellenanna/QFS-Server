var Log = require('../logs/index');

var mongoose = require('mongoose');
mongoose.connect(process.db.connection);

var db = mongoose.connection;

db.on('error', function() {
    Log.error('Database', 'Connection failed');
});

db.once('open', function() {
    Log.info('Database', 'Connection successfully');
    User.create({
        firstname   : 'firstname_user0',
        lastname    : 'lastname_user0',
        username    : 'user0',
        password    : 'pass0',
        email       : 'user0@test.com'
    }, function(err) {
        if (err) {
            Log.error(err);
        } else {
            Log.info('Database', 'User created successfully');
        }
    });
});

var userSchema = mongoose.Schema({
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        username: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['registered', 'activated', 'deleted'],
            default: 'registered'
        },
        role: {
            type: String,
            enum: ['Player', 'Administrator', 'Moderator'],
            default: 'Player'
        }
    },
    {
        timestamps: true
    }
);

userSchema.methods.fullName = function() {
    return this.firstname + ', ' + this.lastname;
}

userSchema.methods.validPassword = function(password) {
    return this.password === password;
}

userSchema.statics.register = function(firstname, lastname, username, password, email, cb) {
    User.create({
        firstname   : firstname,
        lastname    : lastname,
        username    : username,
        password    : password,
        email       : email
    }, function(err, user) {
        if(err) cb(err);
        cb(null, user);
    });
}

var User = mongoose.model('User', userSchema);

module.exports = {
    User        : User
}