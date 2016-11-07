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

    signIn(event) {
      event.preventDefault();
    },

    render() {
      return(
        <div className="returning-user-sign-in">
          <h2>Sign In</h2>
          <p>Been here before? Welcome back!</p>

          <label>Email</label>
          <input type="text" onChange={this.updateEmail}/>

          <label>Password</label>
          <input type="password" onChange={this.updatePassword}/>

          <button onClick={this.signIn}>Sign In</button>
        </div>
      );
    }
  }
);
