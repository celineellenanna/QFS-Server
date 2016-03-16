var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth');
var passport = require('passport');

router.post('/login', authController.authenticate);
router.post('/register', authController.register);
router.get('/logout', authController.logout);

module.exports = router;
