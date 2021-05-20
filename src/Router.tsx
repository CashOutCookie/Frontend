import React from 'react';
import { Activate } from './pages/Activate'
import { Contact } from './pages/Contact'
import { Prizes } from './pages/Prizes'
import { Sponsor } from './pages/Sponsor'
import { Success } from './pages/Success'
import { User } from './pages/AppContent/User'
import { Bank } from './pages/AppContent/Bank'
import { Gamble } from './pages/AppContent/Gamble'
import { Lottery } from './pages/AppContent/Lottery'
import { App } from './pages/App';
import { Quiz } from './pages/AppContent/Quiz'
import { Work } from './pages/AppContent/Work'
import { Spend } from './pages/AppContent/Spend'
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
          <Route path="/prizes" exact component={Prizes} />
          <Route path="/sponsor" exact component={Sponsor} />
          <Route path="/activate" exact component={Activate} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/verify/success" exact component={Success} />
          <Route path="/user" component={User} />
          <Route path="/quiz" exact component={Quiz} />
          <Route path="/bank" exact component={Bank} />
          <Route path="/gamble" exact component={Gamble} />
          <Route path="/work" exact component={Work} />
          <Route path="/spend" exact component={Spend} />
          <Route path="/lottery" exact component={Lottery} />
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