const React = require('react');
const ReactDOM = require('react-dom');

module.exports = React.createClass({
  render() {
    return (
      <div className="current-question">
        This is the current question area.
        Question is: {this.props.questionText}
        <button onClick={this.props.prevQuestion}>Prev Question</button>
        <button onClick={this.props.nextQuestion}>Next Question</button>
      </div>
    );
  }
});
