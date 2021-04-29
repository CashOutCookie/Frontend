import React from 'react';
import { App } from './pages/App'

import { Route, BrowserRouter, Switch } from 'react-router-dom';

function Router() {
  return(
    <div className="router">
      <BrowserRouter>
        <Switch>
          <Route path="/app" exact component={App} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Router