import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import Ended from './components/Ended'
import Home from './Home'
import CTF from './dashboard/CTF'
import Rules from './Rules';
import Dashboard from './dashboard/Dashboard'
import Quiz from './dashboard/Work'
import Transfer from './dashboard/Transfer'
import Gamble from './dashboard/Gamble';
import Contact from './Contact'
import Report from './Report'
import Howtoplay from './Howtoplay'
import Logout from './Logout'
import Login from './Login'
import Signup from './Signup'
import Verify from './components/Verify'
import Success from './components/Success'
import Profile from './Profile'
import Rank from './Rank'
import Changelog from './Changelog';
import Credits from './Credits'
import ConfirmReset from './components/ConfirmReset'
import PageNotFound from './components/PageNotFound'
import './css/Main.css'
import PushNotis from './components/PushNotis'

function App() {
  return (
    <div className="App">
      {/* <PushNotis/> */}
      
      <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={Ended}></Route> */}
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/ctf" component={CTF}></Route>
        <Route path="/rules" exact component={Rules}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="/credits" exact component={Credits}></Route>
        <Route path="/dashboard" exact component={Dashboard}></Route>
        <Route path="/quiz" exact component={Quiz}></Route>
        <Route path="/transfer" exact component={Transfer}></Route>
        <Route path="/rank" exact component={Rank}></Route>
        <Route path="/report" exact component={Report}></Route>
        <Route path="/gamble" exact component={Gamble}></Route>
        <Route path="/howtoplay" exact component={Howtoplay}></Route>
        <Route path="/changelog" exact component={Changelog}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/logout" exact component={Logout}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/verify" exact component={Verify}></Route>
        <Route path="/verify/success" exact component={Success}></Route>
        <Route path="/confirmreset/:uidb64/:token" exact component={ConfirmReset}></Route>
        <Route component={PageNotFound} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export { App };