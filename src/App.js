import React from 'react';
import './css/Main.css'
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Home.js'
import About from './About.js';
import Contact from './Contact.js'
function App() {
    return (
        <div className="App">
        <BrowserRouter>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
        </BrowserRouter>
        </div>
    );
}

export default App;