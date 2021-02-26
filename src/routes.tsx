import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login, Home, Chat, AddUser, Edit, Emergency, Maintenance } from './pages'

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' exact component={Home} />
        <Route path='/edit' exact component={Edit} />
        <Route path='/chat' component={Chat} />
        <Route path='/register' component={AddUser} />
        <Route path='/emergency' component={Emergency} />
        <Route path='/maintenance' component={Maintenance} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;