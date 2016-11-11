const React = require('react');
const ReactDOM = require('react-dom');
const ResponseStore = require('../../stores/response_store.js');

module.exports = React.createClass({

  selectAnswer() {
    this.props.selectAnswer(this.props.answerId);
  },

  render() {
    let classes;

    if (this.props.selected || ResponseStore.answerSelected(this.props.answerId)) {
      classes = "answer-button selected";
    }

    else {
      classes = "answer-button";
    }

    return (
      <li>
        <button className={classes} onClick={this.selectAnswer}>{this.props.answerText}</button>
      </li>
    );
  }
});
