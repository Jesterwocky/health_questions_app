const React = require('react');
const ReactDOM = require('react-dom');

const ExistingAccount = require('./existing_account.jsx');
const NewAccount = require('./new_account.jsx');

module.exports = React.createClass({
  render() {
    return(
      <div className={"login-page"}>
        <h1>Health Journey</h1>
        <ExistingAccount/>
        <NewAccount/>
      </div>
    );
  }
});
