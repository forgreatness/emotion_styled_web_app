/** @jsx jsx */
import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from 'react-router-dom';

import Navbar from './components/Navbar';
import News from './pages/News';
import Home from './pages/Home';
import About from './pages/About';  
import Login from './pages/Login';  

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Times&display=swap');
  body {
    margin: 0;
    font-family: Times, "Times New Roman", serif;
  }

  h1:first-of-type {
    margin-top: 0;
  }
`;

function App() {
  const { path } = useRouteMatch();

  const styles = {
    padding: '0px 10px'
  };

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <Navbar />
      <main>
        <Switch>
          <Route path={`${path}/home`}>
            <Home css={styles}/>
          </Route>
          <Route path={`${path}/news`}>
            <News css={styles}/>
          </Route>
          <Route path={`${path}/about`}>
            <About css={styles}/>
          </Route>
          <Route path={`${path}/login`}>
            <Login css={styles}/>
          </Route>
          <Route exact path={path}>
            <Redirect to={`${path}/home`} />
          </Route>
          <Route path="*">
            <div>404 - Page Not Found</div>
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
