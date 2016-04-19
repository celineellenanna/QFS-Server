var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz');

router.post('/', quizController.create);
router.get('/:id', quizController.get);
router.delete('/:id', quizController.cancel);


module.exports = router;