const React = require('react');
const ReactDOM = require('react-dom');

const SessionActions = require('../../actions/session_actions.js');
const SessionStore = require('../../stores/session_store.js');
const hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
    getInitialState() {
      return ({
        email: "",
        password: "",
      });
    },

    updateEmail(event) {
      this.setState({
        email: event.currentTarget.value
      });
    },

    updatePassword(event) {
      this.setState({
        password: event.currentTarget.value
      });
    },

    logIn(event) {
      event.preventDefault();
      SessionActions.logIn({
        email: this.state.email,
        password: this.state.password
      });
    },

    render() {
      return(
        <div className="returning-user-sign-in">
          <h2>Sign In</h2>

          <form onSubmit={this.logIn}>
            <label>email</label>
            <input type="text" onChange={this.updateEmail} className="text-field"/>

            <label>password</label>
            <input type="password" onChange={this.updatePassword} className="text-field"/>

            <input type="submit" value="Sign In" className="login-button"/>
          </form>
        </div>
      );
    }
  }
);
