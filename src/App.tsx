import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './containers/Home';
import Page from './containers/Page';

const App: React.FC = () => {
  return (
    <div className="app">

      <Router>
        <Route path="/" component={ Home } exact />
        <Route path="/london" component={ Page } exact />
      </Router>

    </div>
  );
}

export default App;
