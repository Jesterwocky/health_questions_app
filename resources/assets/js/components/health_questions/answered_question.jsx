const React = require('react');
const ReactDOM = require('react-dom');

module.exports = React.createClass({
  render() {
    return(
      <div>
        <h2>This is the answered questions area.</h2>
        {this.props.question.question_text}
      </div>
    );
  }
});
