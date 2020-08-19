import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/emotion_styled_web_app">
        <App />
      </Route>
      <Route exact path="/">
        <Redirect to="/emotion_styled_web_app" />
      </Route>
      <Route path="*">
        <div>404 - Page Not Found</div>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
