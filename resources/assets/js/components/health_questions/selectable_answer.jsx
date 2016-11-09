const React = require('react');
const ReactDOM = require('react-dom');

module.exports = React.createClass({
  selectAnswer() {
    this.props.selectAnswer(this.props.answerId);
  },

  render() {
    return (
      <li>
        <button onClick={this.selectAnswer}>{this.props.answerText}</button>
      </li>
    );
  }
});
