var Log = require('../logs/index');
var async = require('async');
var Quiz = require('../models/index').Quiz;
var Category = require('../models/index').Category;
var Question = require('../models/index').Question;
var Round = require('../models/index').Round;
var RoundQuestion = require('../models/index').RoundQuestion;
var UserAnswer = require('../models/index').UserAnswer;
var fs = require('fs');


var controller = {
    create: function(req, res, next) {
        Quiz.create({
            _challenger: req.body.challengerId,
            _opponent: req.body.opponentId
        }, function(err, quiz) {
            if(err) next(err);
            Quiz.findOne(quiz)
                .populate('_challenger')
                .populate('_opponent')
                .populate({path: '_rounds', model: 'Round',
                    populate: {path: '_category', model: 'Category',
                        populate: {path: '_questions', model: 'Question',
                            populate: {path: '_answers', model: 'Answer'}
                        }
                    }
                })
                .populate({path: '_rounds', model: 'Round',
                    populate: {path: '_roundQuestions', model: 'RoundQuestion',
                        populate: {path: '_question', model: 'Question',
                            populate: {path: '_answers', model: 'Answer'}
                        },
                        populate: {path: '_userAnswers', model: 'UserAnswer',
                            populate: {path: '_user', model: 'User'},
                            populate: {path: '_answer', model: 'Answer'}
                        }
                    }
                })
                .exec(function(err, quiz) {
                    if (err) {
                        res.send({"success": false, "message": "Quiz nicht erstellt", data: null });
                    } else {
                        res.send({"success": true, "message": "Quiz erstellt", data: quiz});
                    }
                });
        });
    },
    get: function(req, res, next) {
        Quiz.findById(req.params.id)
            .populate('_opponent')
            .populate('_challenger')
            .populate({path: '_rounds', model: 'Round',
                populate: {path: '_category', model: 'Category',
                    populate: {path: '_questions', model: 'Question',
                        populate: {path: '_answers', model: 'Answer'}
                    }
                }
            })
            .populate({path: '_rounds', model: 'Round',
                populate: {path: '_roundQuestions', model: 'RoundQuestion',
                    populate: {path: '_question', model: 'Question',
                        populate: {path: '_answers', model: 'Answer'}
                    },
                    populate: {path: '_userAnswers', model: 'UserAnswer',
                        populate: {path: '_user', model: 'User'},
                        populate: {path: '_answer', model: 'Answer'}
            }}})
            .exec(function(err, quiz) {
                if(err) next(err);
                if(quiz) {
                    res.send({ "success" : true, "message" : "Quiz gefunden", data : quiz });
                } else {
                    res.send({ "success" : false, "message" : "Quiz nicht gefunden", data : null });
                }
            });
    },
    getOpen: function (req, res, next) {
        Quiz.find({
            $or: [
                {_challenger: req.params.id, status: 'Open'},
                {_opponent: req.params.id, status: 'Open'}
            ]
        })
        .populate('_challenger')
        .populate('_opponent')
        .populate({path: '_rounds', model: 'Round',
            populate: {path: '_category', model: 'Category',
                populate: {path: '_questions', model: 'Question',
                    populate: {path: '_answers', model: 'Answer'}
                }
            }
        })
        .populate({path: '_rounds', model: 'Round',
            populate: {path: '_roundQuestions', model: 'RoundQuestion',
                populate: {path: '_question', model: 'Question',
                    populate: {path: '_answers', model: 'Answer'}
                },
                populate: {path: '_userAnswers', model: 'UserAnswer',
                    populate: {path: '_user', model: 'User'},
                    populate: {path: '_answer', model: 'Answer'}
                }}})
        .exec(function(err, quizzes) {
            if(err) next(err);
            if (quizzes) {
                res.send({ "success" : true, "message" : "Quizzes gefunden", data : quizzes });
            } else {
                res.send({ "success" : false, "message" : "Keine Quiz gefunden", data : null });
            }
        });
    },
    getRunning: function (req, res, next) {
        Quiz.find({
                $or: [
                    {_challenger: req.params.id, status: 'WaitingForOpponent'},
                    {_challenger: req.params.id, status: 'WaitingForChallenger'},
                    {_opponent: req.params.id, status: 'WaitingForOpponent'},
                    {_opponent: req.params.id, status: 'WaitingForOpponent'}
                ]
            })
            .populate('_challenger')
            .populate('_opponent')
            .populate({path: '_rounds', model: 'Round',
                populate: {path: '_category', model: 'Category',
                    populate: {path: '_questions', model: 'Question',
                        populate: {path: '_answers', model: 'Answer'}
                    }
                }
            })
            .populate({path: '_rounds', model: 'Round',
                populate: {path: '_roundQuestions', model: 'RoundQuestion',
                    populate: {path: '_question', model: 'Question',
                        populate: {path: '_answers', model: 'Answer'}
                    },
                    populate: {path: '_userAnswers', model: 'UserAnswer',
                        populate: {path: '_user', model: 'User'},
                        populate: {path: '_answer', model: 'Answer'}
            }}})
            .exec(function(err, quizzes) {
                if(err) next(err);
                if (quizzes) {
                    res.send({ "success" : true, "message" : "Quizzes gefunden", data : quizzes });
                } else {
                    res.send({ "success" : false, "message" : "Keine Quiz gefunden", data : null });
                }
        });
    },
    getFinished: function (req, res, next) {
        Quiz.find({
                $or: [
                    {_challenger: req.params.id, status: 'Canceled'},
                    {_opponent: req.params.id, status: 'Canceled'},
                    {_challenger: req.params.id, status: 'Finished'},
                    {_opponent: req.params.id, status: 'Finished'}
                ]
            })
            .populate('_challenger')
            .populate('_opponent')
            .populate({path: '_rounds', model: 'Round',
                populate: {path: '_category', model: 'Category',
                    populate: {path: '_questions', model: 'Question',
                        populate: {path: '_answers', model: 'Answer'}
                    }
                }
            })
            .populate({path: '_rounds', model: 'Round',
                populate: {path: '_roundQuestions', model: 'RoundQuestion',
                    populate: {path: '_question', model: 'Question',
                        populate: {path: '_answers', model: 'Answer'}
                    },
                    populate: {path: '_userAnswers', model: 'UserAnswer',
                        populate: {path: '_user', model: 'User'},
                        populate: {path: '_answer', model: 'Answer'}
            }}})
            .exec(function(err, quizzes) {
                if(err) next(err);
                if (quizzes) {
                    res.send({ "success" : true, "message" : "Quizzes gefunden", data : quizzes });
                } else {
                    res.send({ "success" : false, "message" : "Keine Quiz gefunden", data : null });
                }
        });
    },
    reject: function(req, res, next) {
        Quiz.findById(req.body.id, function(err, quiz) {
            if(err) next(err);
            quiz.status = 'Canceled';
            quiz.save();
            res.send({ "success" : true, "message" : "Quiz beendet", data : null });
        });
    },
    accept: function(req, res, next) {
        Quiz.findById(req.body.id, function(err, quiz) {
            if(err) next(err);
            quiz.status = 'WaitingForOpponent';
            quiz.save();
            res.send({ "success" : true, "message" : "Quiz gestartet", data : null });
        });
    },
    createRound: function (req, res, next) {
        var quizId = req.body.quizId;
        var categoryId = req.body.categoryId;
        var increment = 0;

        Round.create({
            _category: categoryId
        }).then(function(round) {
            Category.find(categoryId)
                .exec(function(err, category) {
                    Question.findRandom(category._questions)
                        .limit(3)
                        .exec(function(err, questions) {
                            async.forEachOf(questions, function(question, index, cb) {
                                RoundQuestion.create({
                                    sequenceNo: increment++,
                                    _question: question._id
                                }, function(err, roundQuestion) {
                                    round._roundQuestions.push(roundQuestion._id);
                                }).then(function(err) {
                                    cb();
                                });
                            }, function(err) {
                                round.save();
                                Quiz.findById(quizId, function(err, quiz) {
                                    quiz._rounds.push(round._id);
                                    quiz.save();
                                    Round.findById(round._id)
                                        .populate({path: '_category', model: 'Category',
                                            populate: {path: '_questions', model: 'Question',
                                                populate: {path: '_answers', model: 'Answer'}
                                            }
                                        })
                                        .exec(function(err, round) {
                                            var populateOptions = {path: '_roundQuestions', model: 'RoundQuestion',
                                                populate: {path: '_question', model: 'Question',
                                                    populate: {path: '_answers', model: 'Answer'}
                                                }
                                            };

                                            Round.populate(round, populateOptions,function(err, round) {
                                                var outputFilename = 'createRound.json';

                                                fs.writeFile(outputFilename, JSON.stringify(round, null, 4), function(err) {
                                                    if(err) {
                                                        console.log(err);
                                                    } else {
                                                        console.log("JSON saved to " + outputFilename);
                                                    }
                                                });
                                                res.send({"success": true, "message": "Runde gestartet", data: round});
                                            })
                                        });
                                });
                            });
                        });
                });
        });
    },
    getCategories: function (req, res, next) {
        Category.findRandom()
            .limit(3)
            .populate({path: '_questions', model: 'Question',
                populate: {path: '_answers', model: 'Answer'}
            })
            .exec(function (err, categories) {
                res.send({ "success" : true, "message" : "3 Kategorien", data: categories});
            });
    },
    getRound: function (req, res, next) {
        Round.findById(req.params.id)
            .populate({path: '_category', model: 'Category',
                populate: {path: '_questions', model: 'Question',
                    populate: {path: '_answers', model: 'Answer'}
                }
            })
            .exec(function(err, round) {
                var populateOptions = {path: '_roundQuestions', model: 'RoundQuestion',
                    populate: {path: '_question', model: 'Question',
                        populate: {path: '_answers', model: 'Answer'}
                    }
                };

/*
Round.populate(round, populateOptions, function(err, roundPopulate) {
var populateOptions = {path: '_roundQuestions', model: 'RoundQuestion',
    populate: {path: '_userAnswers', model: 'UserAnswer',
        populate: {path: '_answers', model: 'Answer'},
        populate: {path: '_user', model: 'User'}
    }
};
*/

                Round.populate(round, populateOptions, function(err, roundPopulate) {
                    var outputFilename = 'getRound.json';

                    fs.writeFile(outputFilename, JSON.stringify(roundPopulate, null, 4), function(err) {
                        if(err) {
                            console.log(err);
                        } else {
                            console.log("JSON saved to " + outputFilename);
                        }
                    });
                    res.send({ "success" : true, "message" : "Runde gefunden", data: roundPopulate });
               // });
            });
            });
    },
    createUserAnswer: function (req, res, next) {
        UserAnswer.create({
            timeToAnswer: req.body.timeToAnswer,
            _answer: req.body.answerId,
            _user: req.body.userId
        }).then(function(userAnswer) {
            RoundQuestion.findById(req.body.roundQuestionId, function (err, roundQuestion) {
                if (err) {
                    res.send({"success": false, "message": "UserAnswer nicht erstellt", data: null });
                } else {
                    roundQuestion._userAnswers.push(userAnswer._id);
                    roundQuestion.save();
                    res.send({"success": true, "message": "UserAnswer erstellt", data: null});
                }

            });
        });
    },
};

module.exports = controller;