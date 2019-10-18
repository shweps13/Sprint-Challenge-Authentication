import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginForm from './components/LoginForm';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>Sprint Dad Jokes App</h2>
        </header>
        <Route exact path="/" component={LoginForm} />
      </div>
    </Router>
  );
}

export default App;
