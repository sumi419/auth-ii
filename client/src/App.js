import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import SignIn from './auth/SignIn';
import Users from './auth/Users';

class App extends Component {
  logoutHandler = (event) => {
    localStorage.removeItem('jwt');

    this.props.history.push('/signin');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route path="/signin" component={SignIn} />
        <Route path="/users" component={Users} />
        <div>
          {localStorage.getItem('jwt') && <button onClick={this.logoutHandler}>Logout</button>}
        </div>
      </div>
    );
  }
}

export default withRouter(App);
// withRouter lets us use this.props.history
