var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz');

router.post('/', quizController.create);
router.get('/open/:id', quizController.getOpen);
router.get('/running/:id', quizController.getRunning);
router.get('/finished/:id', quizController.getFinished);
router.get('/roundQuestion/:id', quizController.getRoundQuestions);
router.get('/category', quizController.getCategories);
router.post('/accept', quizController.accept);
router.post('/reject', quizController.reject);
router.get('/:id', quizController.get);
router.post('/round/answer', quizController.putAnswer);
router.post('/round/', quizController.createRound);

module.exports = router;