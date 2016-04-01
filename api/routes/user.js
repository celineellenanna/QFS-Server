var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

router.get('/', userController.index);
router.get('/{id}', userController.get);
router.delete('/{id}', userController.destroy);

module.exports = router;
