import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login, Home, Chat, AddUser } from './pages'

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' exact component={Home} />
        <Route path='/chat' component={Chat} />
        <Route path='/register' component={AddUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;