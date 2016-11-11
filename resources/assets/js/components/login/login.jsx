const React = require('react');
const ReactDOM = require('react-dom');

const SessionStore = require('../../stores/session_store.js');
const hashHistory = require('react-router').hashHistory;
const ExistingAccount = require('./existing_account.jsx');
const NewAccount = require('./new_account.jsx');

module.exports = React.createClass({
  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
  },

  _onSessionChange() {
    debugger
    if (SessionStore.loggedIn()) {
      hashHistory.push("health_questions");
    }
  },

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
