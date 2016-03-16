var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

router.get('/', userController.index, function(req, res, next) {
  res.send(res.users);
});

module.exports = router;
