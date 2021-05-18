import React from 'react';
import { Bank } from './pages/AppContent/Bank'
import { App } from './pages/App';
import { Quiz } from './pages/AppContent/Quiz'
import { Work } from './pages/AppContent/Work'
import { LoginContent } from './pages/Login';
import { Ctf } from './pages/AppContent/Ctf'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Rules } from './pages/Rules';
import { Tutorial } from './pages/Tutorial';

function Router() {
  return(
    <div className="router">
      <BrowserRouter>
        <Switch>
          <Route path="/app" exact component={App} />
          <Route path="/quiz" exact component={Quiz} />
          <Route path="/bank" exact component={Bank} />
          <Route path="/work" exact component={Work} />
          <Route path="/ctf" component={Ctf} />
          <Route path="/login" exact component={LoginContent}></Route>
          <Route path="/" exact component={Landing}></Route>
          <Route path="/rules" exact component={Rules}></Route>
          <Route path="/tutorial" exact component={Tutorial}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Router