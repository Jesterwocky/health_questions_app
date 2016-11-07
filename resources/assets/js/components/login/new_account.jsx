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
        <p>New to the site? Get started here!</p>

        <label>Name</label>
        <input type="text" onChange={this.updateName}/>

        <label>Email</label>
        <input type="text" onChange={this.updateEmail}/>

        <label>Password</label>
        <input type="password" onChange={this.updatePassword}/>

        <button onClick={this.createAccount}>Sign In</button>
      </div>
    );
  }
});
