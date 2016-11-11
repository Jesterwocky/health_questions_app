const React = require('react');
const ReactDOM = require('react-dom');
const SessionActions = require('../actions/session_actions.js');
const SessionStore = require('../stores/session_store.js');
const hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  getInitialState() {
    return({
      loggedIn: SessionStore.loggedIn(),
      currentUser: SessionStore.currentUser()
    });
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
  },

  _onSessionChange() {
    if (SessionStore.loggedIn()) {
      hashHistory.push("health_questions");
    }

    else {
      hashHistory.push("login");
    }

    this.setState({
      loggedIn: SessionStore.loggedIn(),
      currentUser: SessionStore.currentUser()
    });
  },

  userGreeting() {
    if (this.state.loggedIn && this.state.currentUser.name) {
      return `Welcome, ${this.state.currentUser.name}!`;
    }
    else {
      return 'Welcome!';
    }
  },

  logOut() {
    SessionActions.logOut();
    hashHistory.push("login");
  },

  render() {
    return(
      <div className="nav-bar group">
        <div className="nav-bar-content group">
          <div className="user-greeting">{this.userGreeting()}</div>
          <div className="logout-button-section">
            <button onClick={this.logOut} className="logout-button">
              Log out
            </button>
          </div>
        </div>
      </div>
    );
  }
});
