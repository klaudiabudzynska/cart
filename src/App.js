import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import ProductsList from './productsList/ProductsList';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={ProductsList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
