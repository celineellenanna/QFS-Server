var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz');

router.post('/', quizController.create);
router.get('/open/:id', quizController.getOpen);
router.get('/running/:id', quizController.getRunning);
router.get('/category', quizController.getCategories);
router.get('/category/:id', quizController.getQuestions);
router.post('/accept', quizController.accept);
router.post('/reject', quizController.reject);
router.get('/:id', quizController.get);
router.post('/:id', quizController.putAnswer);
router.post('/:id/category/:cid', quizController.createRound);

module.exports = router;