import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login, Home, Chat } from './pages'

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' exact component={Home} />
        <Route path='/chat' component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;