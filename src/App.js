import React from 'react';
import './css/Main.css'
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Home.js'
import About from './About.js';
import Register from './accounts/register';
import Login from './accounts/login';
import Logout from './accounts/logout';

function App() {
    return (
        <div className="App">
        <BrowserRouter>
            <Route path="/" exact component={Home}></Route>
            <Route path="/signup" exact component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/about" component={About}></Route>
        </BrowserRouter>
        </div>
    );
}

export default App;