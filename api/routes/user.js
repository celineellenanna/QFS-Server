var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

router.get('/', userController.index);
router.get('/:id', userController.get);
router.get('/findOpponent/:id', userController.findOpponent);

module.exports = router;
