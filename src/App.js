import React from 'react';
import Home from './pages/Home';
import './App.css';
import { Route, Switch } from 'react-router';
import Details from './pages/Details';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/:id" component={ Details } />
      </Switch>
    </div>
  );
}

export default App;
