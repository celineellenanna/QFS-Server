var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/api');
});

router.get('/api', function(req, res, next) {
  res.send({ title: 'QFS API ' + process.srv.env });
});

module.exports = router;
