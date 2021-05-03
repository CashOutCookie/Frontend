import React from 'react';
import { App } from './pages/App';
import { Login } from './pages/Login';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Landing } from './pages/Landing';

function Router() {
  return(
    <div className="router">
      <BrowserRouter>
        <Switch>
          <Route path="/app" exact component={App} />
        </Switch>
        <Switch>
          <Route path="/login" exact component={Login}></Route>
        </Switch>
        <Switch>
          <Route path="/" exact component={Landing}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Router