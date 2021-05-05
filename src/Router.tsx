import React from 'react';
import { App } from './pages/App';
import { LoginContent } from './pages/Login';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Landing } from './pages/Landing';

function Router() {
  return(
    <div className="router">
      <BrowserRouter>
        <Switch>
          <Route path="/app" exact component={App} />
          <Route path="/login" exact component={LoginContent}></Route>
          <Route path="/" exact component={Landing}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Router