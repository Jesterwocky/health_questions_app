const React = require('react');
const ReactDOM = require('react-dom');

const QuestionStore = require('../../stores/question_store.js');
const JournalEntryStore = require('../../stores/journal_entry_store.js');
const QuestionActions = require('../../actions/question_actions.js');
const JournalEntryActions = require('../../actions/journal_entry_actions.js');
const AnsweredQuestion = require('./answered_question.jsx');
const CurrentQuestion = require('./current_question.jsx');

module.exports = React.createClass({
  getInitialState() {
    return({
      questions: QuestionStore.all(),
      journalEntryId: null,
      currentQuestion: 0,
      answeredQuestions: []
    });
  },

  componentDidMount() {
    this.questionListener = QuestionStore.addListener(this._handleQuestionChange);
    this.journalEntryListener = JournalEntryStore.addListener(this._handleEntryCreation);
    QuestionActions.getQuestionsAndAnswers();
    JournalEntryActions.createJournalEntry({});
  },

  _handleQuestionChange() {
    this.setState({
      questions: QuestionStore.all()
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
    if (this.state.currentQuestion + 1 < this.state.questions.length) {
      this.setState({
        currentQuestion: this.state.currentQuestion += 1
      });
    }
  },

  prevQuestion(event) {
    event.preventDefault();
    if (this.state.currentQuestion - 1 >= 0) {
      this.setState({
        currentQuestion: this.state.currentQuestion - 1
      });
    }
  },

  answeredQuestions() {
    return this.state.answeredQuestions.map((question, i) => {
      return (
        <AnsweredQuestion
          key={i}
          question={question}
        />
      );
    });
  },

  currentQuestion() {
    let questionText, questionId, answerList;
    if (this.state.questions.length >0) {
      questionText = this.state.questions[this.state.currentQuestion].question_text;
      questionId = this.state.questions[this.state.currentQuestion].id;
      answerList = this.state.questions[this.state.currentQuestion].answers;
    }
    return(
      <CurrentQuestion
        journalEntryId={this.state.journalEntryId}
        questionText={questionText}
        questionId={questionId}
        answers={answerList}
        nextQuestion={this.nextQuestion}
        prevQuestion={this.prevQuestion}
      />
    );
  },

  render() {

    return(
      <div className="health-questions-page">
        <h1>Health Quiz</h1>
        <p>Entry id {this.state.journalEntryId}</p>
        <p>Created at {this.state.entryDate}</p>
        <div className="answered-health-questions">
          {this.answeredQuestions()}
        </div>
          {this.currentQuestion()}
      </div>
    );
  }
});
