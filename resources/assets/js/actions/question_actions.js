const Dispatcher = require('../dispatcher.js');
const QuestionApiUtil = require('./util/question_api_util.js');
const Constants = require('./constants.js');

module.exports = {
  getQuestionsAndAnswers() {
    QuestionApiUtil.questionsAndAnswers(
      this.receiveQuestions
    );
  },

  //callbacks

  receiveQuestions(questions) {
    Dispatcher.dispatch({
      actionType: Constants.QUESTIONS_RECEIVED,
      questions: questions
    });
  }
};
