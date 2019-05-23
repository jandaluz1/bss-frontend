import React from 'react';
import { Boxscore } from './components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const mlbId = 'eed38457-db28-4658-ae4f-4d4d38e9e212';
  const nbaId = '6c974274-4bfc-4af8-a9c4-8b926637ba74';
  return (
    <div className="App">
      <Router>
        {/* <Route path="/" exact component={App} /> */}
        <Route
          path="/mlb"
          render={props => <Boxscore {...props} id={`mlb/${mlbId}`} />}
        />
        <Route
          path="/nba"
          render={props => <Boxscore {...props} id={`nba/${nbaId}`} />}
        />
      </Router>
      {/* <Boxscore /> */}
    </div>
  );
}

export default App;
