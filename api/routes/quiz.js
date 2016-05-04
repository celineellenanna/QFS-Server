var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz');

router.post('/', quizController.create);
router.get('/open/:id', quizController.getOpen);
router.get('/running/:id', quizController.getRunning);
router.get('/finished/:id', quizController.getFinished);
router.get('/round/:id', quizController.getRound);
router.get('/category', quizController.getCategories);
router.post('/accept', quizController.accept);
router.post('/reject', quizController.reject);
router.post('/round/userAnswer', quizController.createUserAnswer);
router.post('/round/userAnswerTimeElapsed', quizController.createUserAnswerTimeElapsed);
router.get('/test', quizController.test);
router.post('/round/', quizController.createRound);
router.get('/:id', quizController.get);

module.exports = router;