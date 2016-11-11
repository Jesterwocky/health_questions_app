const React = require('react');
const ReactDOM = require('react-dom');

const QuestionStore = require('../../stores/question_store.js');
const JournalEntryStore = require('../../stores/journal_entry_store.js');
const QuestionActions = require('../../actions/question_actions.js');
const JournalEntryActions = require('../../actions/journal_entry_actions.js');
const AnsweredQuestion = require('./answered_question.jsx');
const CurrentQuestion = require('./current_question.jsx');
const ResponseStore = require('../../stores/response_store.js');
const ResponseActions = require('../../actions/response_actions.js');

module.exports = React.createClass({
  getInitialState() {
    return({
      questions: QuestionStore.all(),
      journalEntryId: null,
      currentQuestionInd: 0,
      answeredQIds: []
    });
  },

  componentDidMount() {
    this.questionListener = QuestionStore.addListener(this._handleQuestionChange);
    this.journalEntryListener = JournalEntryStore.addListener(this._handleEntryCreation);
    QuestionActions.getQuestionsAndAnswers();
    JournalEntryActions.createJournalEntry({});
  },

  componentWillUnmount() {
    this.questionListener.remove();
    this.journalEntryListener.remove();
    ResponseActions.clearResponses();
  },

  _handleQuestionChange() {
    this.setState({
      questions: QuestionStore.all(),
    });
  },

  _handleEntryCreation() {
    let entry = JournalEntryStore.inProgressEntry();
    this.setState({
      journalEntryId: entry.id,
      entryDate: entry.created_at
    });
  },

  nextQuestion(event) {
    event.preventDefault();
    let nextQuestionInd = this.state.currentQuestionInd + 1;

    if (nextQuestionInd < this.state.questions.length) {
      if (!this.state.answeredQIds.includes(this.state.currentQuestionInd)) {
        this.state.answeredQIds.push(this.state.currentQuestionInd);
      }

      this.setState({
        currentQuestionInd: nextQuestionInd,
      });
    }
  },

  updateAnsweredQuestions(questionId) {

  },

  prevQuestion(event) {
    event.preventDefault();
    if (this.state.currentQuestionInd - 1 >= 0) {
      this.setState({
        currentQuestionInd: this.state.currentQuestionInd - 1
      });
    }
  },

  answeredQuestions() {
    // let questions;
    //
    // if (this.state.answeredQIds.length > 0) {
    //
    //   let answeredQuestions = this.state.answeredQIds.map((ind) => {
    //     return this.state.questions[ind];
    //   });
    //
    //   questions = answeredQuestions.map((question, i) => {
    //     let answer = ResponseStore.questionResponseText(question.id);
    //
    //     return (
    //       <AnsweredQuestion
    //         key={i}
    //         question={question.question_text}
    //         answer={answer}
    //       />
    //     );
    //   });
    // }
    // return (
    //   <div className="group answered-questions-sidebar">
    //     <h3>My Answers</h3>
    //     {questions}
    //   </div>
    // );

    return <div className="group answered-questions-sidebar"></div>;
  },

  currentQuestion() {
    let questionText, questionId, answerList, isFirstQuestion, isFinalQuestion;
    if (this.state.questions.length >0) {
      questionText = this.state.questions[this.state.currentQuestionInd].question_text;
      questionId = this.state.questions[this.state.currentQuestionInd].id;
      answerList = this.state.questions[this.state.currentQuestionInd].answers;
      isFirstQuestion = this.state.currentQuestionInd === 0;
      isFinalQuestion = this.state.currentQuestionInd === this.state.questions.length - 1;
    }

    return(
      <CurrentQuestion
        journalEntryId={this.state.journalEntryId}
        questionText={questionText}
        questionId={questionId}
        answers={answerList}
        isFirstQuestion={isFirstQuestion}
        isFinalQuestion={isFinalQuestion}
        nextQuestion={this.nextQuestion}
        prevQuestion={this.prevQuestion}
        />
    );
  },

  render() {

    return(
      <div className="health-questions-page">
        <h1>Health Quiz</h1>
        <div className="question-section">
          {this.answeredQuestions()}
          {this.currentQuestion()}
        </div>
      </div>
    );
  }
});
