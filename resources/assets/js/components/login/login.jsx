const React = require('react');
const ReactDOM = require('react-dom');

const ExistingAccount = require('./existing_account.jsx');
const NewAccount = require('./new_account.jsx');

module.exports = React.createClass({
  render() {
    return(
      <div className="login-page">
        <h1>Health Journal</h1>
        <div className="login-boxes">
          <ExistingAccount/>
          <NewAccount/>
        </div>
      </div>
    );
  }
});
