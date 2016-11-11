const React = require('react');
const ReactDOM = require('react-dom');

module.exports = React.createClass({
  render() {
    return(
      <div>
        <h3>My Answers</h3>
        <p>
          Q: {this.props.question_text}
        </p>
        <p>
          A: {this.props.answer_text}
        </p>
      </div>
    );
  }
});
