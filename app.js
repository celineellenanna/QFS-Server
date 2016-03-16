var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

var Config = require('./api/configs/index');
var Database = require('./api/models/index');
var Log = require('./api/logs/index');

var indexRoute = require('./api/routes/index');
var authRoute = require('./api/routes/auth');
var userRoute = require('./api/routes/user');

var app = express();

app.listen(process.srv.port, function() {
  Log.info('Server', 'QFS WEB API started');
  Log.info('Server', 'Environment:' + process.srv.env);
  Log.info('Server', 'Host:' + process.srv.host);
  Log.info('Server', 'Port:' + process.srv.port);
});

// view engine setup
app.set('views', './api/views');
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'qfsHiddenKey',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('./api/public'));

app.use('/', indexRoute);
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    Log.error(err);
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  Log.error(err);
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
