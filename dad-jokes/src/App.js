import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginForm from './components/LoginForm';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Sprint Dad Jokes App</h1>
        </header>
        <Route exact path="/" component={LoginForm} />
      </div>
    </Router>
  );
}

export default App;
