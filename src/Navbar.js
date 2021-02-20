import React from 'react';
import logo from './images/logo.svg';
import Menu from './components/Menu.js'

function Navbar(props) {
        return (
        <div id="nav-bar">
            <h1 className="nav-heading">{props.name}</h1>
            <a className="" href="/"><img alt="" src={logo}></img></a>
            <Menu />
            {/* <a className="menu-items" href="/about">About</a>
            <a className="menu-items" href="/howtoplay">How to Play?</a>
            <a className="menu-items" href="/contact">Contact</a>
            <a className="menu-items" href="/login">Login</a>
            <a href="/signup"><button id="signup">Signup</button></a> */}
        </div>
        );
}

export default Navbar