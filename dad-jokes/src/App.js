import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'

import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/LoginForm';
import Dashboard from './components/dashboard';
import Signup from './components/Signup';

function App() {

  const logout = () => {
    window.localStorage.removeItem('token')
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Sprint Dad Jokes App</h1>
          <div className="Menu">
            <Link to="/">Login</Link>
            <Link to="/signup">Register</Link>
            <Link to="/dashboard">Jokes</Link>
            <Link onClick={logout} to="/">Log Out</Link>
          </div>
        </header>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
