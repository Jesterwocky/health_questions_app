const React = require('react');
const ReactDOM = require('react-dom');

module.exports = React.createClass({
  // getInitialState() {
  //   return ({
  //     username: "",
  //     password: "",
  //     name: "",
  //   });
  // }

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

  updateName(event) {
    this.setState({
      name: event.currentTarget.value
    });
  },

  createAccount(event) {
    event.preventDefault();

  },

  render() {
    return(
      <div className="new-user-sign-up">
        <h2>Create Account</h2>

        <form onSubmit={this.createAccount}>
          <label>name</label>
          <input type="text" onChange={this.updateName} className="text-field"/>

          <label>email</label>
          <input type="text" onChange={this.updateEmail} className="text-field"/>

          <label>Password</label>
          <input type="password" onChange={this.updatePassword} className="text-field"/>

          <input type="submit" value="Sign Up" className="login-button"/>
        </form>


      </div>
    );
  }
});
