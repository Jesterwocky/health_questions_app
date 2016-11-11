const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher.js');
const Constants = require('../actions/constants.js');

const QuestionStore = new Store(Dispatcher);

let _questions = {};

console.log("Question Store loaded.");

function _resetQuestions(questions) {
  _questions = {};

  questions.forEach((question) => {
    _questions[question.id] = question;
  });
}

QuestionStore.all = function() {
  let questions = [];

  if (Object.keys(_questions).length > 0) {
    Object.keys(_questions).forEach((key) => {
      questions.push(_questions[key]);
    });
  }

  return questions;
};

QuestionStore.questionIds = function() {
  return Object.keys(_questions);
};

QuestionStore.find = function(questionId) {
  return _questions[questionId];
};

QuestionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case Constants.QUESTIONS_RECEIVED:
      _resetQuestions(payload.questions);
      this.__emitChange();
      break;
  }
};

module.exports = QuestionStore;
