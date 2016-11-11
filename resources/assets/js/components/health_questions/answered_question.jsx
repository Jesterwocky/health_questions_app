const React = require('react');
const ReactDOM = require('react-dom');

module.exports = React.createClass({
  render() {
    return(
      <div>
        <p>{this.props.question}</p>
        <p>
          I answered: {this.props.answer}
        </p>
      </div>
    );
  }
});
