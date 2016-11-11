const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;

const SelectableAnswer = require('./selectable_answer.jsx');
const ResponseStore = require('../../stores/response_store.js');
const ResponseActions = require('../../actions/response_actions.js');

module.exports = React.createClass({
  getInitialState() {
    return ({
      currentAnswerId: ResponseStore.questionResponseId(this.props.questionId)
    });
  },

  componentDidMount() {
    this.responseListener = ResponseStore.addListener(this._handleResponseChange);
  },

  _handleResponseChange() {
    let answerId = ResponseStore.questionResponseId(this.props.questionId);
    this.setState({
      currentAnswerId: answerId
    });
  },

  selectAnswer(answerId) {
    ResponseActions.postResponse({
      journal_entry_id: this.props.journalEntryId,
      question_id: this.props.questionId,
      answer_id: answerId
    });
  },

  selectableAnswers() {
    console.log(`Question: ${this.props.questionId}`);
    console.log(`Answer: ${this.props.currentAnswerId}`);
    if (this.props.answers !== undefined) {
      return this.props.answers.map((answer, i) => {

        return (
          <SelectableAnswer
            key={i}
            answerText={answer.answer_text}
            answerId={answer.id}
            questionId={this.props.questionId}
            selected={answer.id === parseInt(this.state.currentAnswerId)}
            selectAnswer={this.selectAnswer}
          />
        );
      });
    }
  },

  completeQuiz() {
    hashHistory.push("");
  },

  questionNavButtons() {
    let prevClasses = this.props.isFirstQuestion ? "prev-q-button grayed" : "prev-q-button";
    let nextButtonClass = "next-q-button";
    let nextButtonText = "Next Question";
    let nextAction = this.props.nextQuestion;

    if (this.props.isFinalQuestion) {
      nextButtonClass = "finish-button";
      nextButtonText = "Done";
      nextAction = this.completeQuiz;
    }

    return(
      <div className="question-nav-buttons">
        <button className={prevClasses} onClick={this.props.prevQuestion}>
          Prev Question
        </button>
        <button className={nextButtonClass} onClick={nextAction}>
          {nextButtonText}
        </button>
      </div>
    );
  },

  render() {
    return (
      <div className="current-question group">
        <div className="current-question-content group">
          <div className="ask-question-text">
            <h2>{this.props.questionText}</h2>
          </div>
          <div className="answer-area">
            <ul>
              {this.selectableAnswers()}
            </ul>
            {this.questionNavButtons()}
          </div>
        </div>
      </div>
    );
  }
});
