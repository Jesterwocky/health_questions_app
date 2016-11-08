const React = require('react');
const ReactDOM = require('react-dom');

const QuestionStore = require('../../stores/question_store.js');
const QuestionActions = require('../../actions/question_actions.js');
const AnsweredQuestion = require('./answered_question.jsx');
const CurrentQuestion = require('./current_question.jsx');

module.exports = React.createClass({
  getInitialState() {
    return({
      questions: QuestionStore.all(),
      currentQuestion: 0,
      answeredQuestions: []
    });
  },

  componentDidMount() {
    this.questionListener = QuestionStore.addListener(this._handleQuestionChange);
    QuestionActions.getQuestionsAndAnswers();
  },

  _handleQuestionChange() {
    console.log("State change!");
    this.setState({
      questions: QuestionStore.all()
    });
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

  currentQuestion() {
    let questionText;
    if (this.state.questions.length >0) {
      questionText = this.state.questions[this.state.currentQuestion].question_text;
    }
    return(
      <CurrentQuestion
        questionText={questionText}
        nextQuestion={this.nextQuestion}
        prevQuestion={this.prevQuestion}
      />
    );
  },

  render() {

    return(
      <div className="health-questions-page">
        This is the questions page.
        <div className="answered-health-questions">
          {this.answeredQuestions()}
        </div>
          {this.currentQuestion()}
      </div>
    );
  }
});
