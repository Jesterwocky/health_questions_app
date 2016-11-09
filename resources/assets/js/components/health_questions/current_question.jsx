const React = require('react');
const ReactDOM = require('react-dom');
const SelectableAnswer = require('./selectable_answer.jsx');
const ResponseStore = require('../../stores/response_store.js');
const ResponseActions = require('../../actions/response_actions.js');

module.exports = React.createClass({
  getInitialState() {
    return ({
      userId: 1,
      currentResponseId: ResponseStore.questionResponse(this.props.questionId)
    });
  },

  componentDidMount() {
    this.responseListener = ResponseStore.addListener(this._handleResponseChange);
  },

  _handleResponseChange() {
    let response = ResponseStore.questionResponse(this.props.question.id);
    this.setState({
      currentResponseId: response
    });
  },

  selectAnswer(optionId) {

  },

  selectableAnswers() {
    if (this.props.answers !== undefined) {
      return this.props.answers.map((answer, i) => {
        let selected = false;
        if (answer.id === this.state.currentResponseId) {
          selected = true;
        }

        return (
          <SelectableAnswer
            key={i}
            answerText={answer.answer_text}
            answerId={answer.id}
            questionId={this.props.questionId}
            selected={selected}
            selectAnswer={this.selectAnswer}
            />
        );
      });
    }
  },

  render() {
    return (
      <div className="current-question">
        <h2>{this.props.questionText}</h2>
        <p>Select one response:</p>
        <ul>
          {this.selectableAnswers()}
        </ul>
        <button onClick={this.props.prevQuestion}>Prev Question</button>
        <button onClick={this.props.nextQuestion}>Next Question</button>
      </div>
    );
  }
});
