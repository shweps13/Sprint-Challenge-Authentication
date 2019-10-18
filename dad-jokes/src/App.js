import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/LoginForm';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Sprint Dad Jokes App</h1>
        </header>
        <Route exact path="/" component={LoginForm} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
