import React from 'react';
import { App } from './pages/App';
import { Quiz } from './pages/AppContent/Quiz'
import { LoginContent } from './pages/Login';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Rules } from './pages/Rules';

function Router() {
  return(
    <div className="router">
      <BrowserRouter>
        <Switch>
          <Route path="/app" exact component={App} />
          <Route path="/quiz" exact component={Quiz} />
          <Route path="/login" exact component={LoginContent}></Route>
          <Route path="/" exact component={Landing}></Route>
          <Route path="/rules" exact component={Rules}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Router