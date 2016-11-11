const React = require('react');
const ReactDOM = require('react-dom');

module.exports = React.createClass({
  render() {
    return(
      <div>
        <p>
          Q: {this.props.question.question_text}
        </p>
        <p>
          A:
        </p>
      </div>
    );
  }
});
