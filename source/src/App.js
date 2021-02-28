import React from 'react';
import Home from './Home'
import About from './About.js';
import Contact from './Contact.js'
import Login from './Auth.js'
import './css/Main.css'
import {Route, BrowserRouter} from 'react-router-dom';
import Verify from './components/Verify.js'
import Success from './components/Success'
import Profile from './Profile.js'
import Rank from './Rank'

function App() {
  return(
    <div className="App">
      <BrowserRouter>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/rank" exact component={Rank}></Route>
            <Route path="/contact" exact component={Contact}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/verify" exact component={Verify}></Route>
            <Route path="/verify/success" exact component={Success}></Route>
        </BrowserRouter>
    </div>
  )
}

export default App;