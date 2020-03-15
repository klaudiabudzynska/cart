import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './MainPage/MainPage';
import Chart from './Chart/Chart';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/chart" component={Chart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
