import React from 'react';
import logo from '../images/logo.svg';
import Menu from './Menu.js'

function Navbar(props) {
        return (
        <div id="nav-bar">
            <Menu />
            <a className="" href="/"><img className="logo" alt="" src={logo}></img></a>
            <h1 className="nav-heading">{props.name}</h1>
            {/* <a className="menu-items" href="/about">About</a>
            <a className="menu-items" href="/howtoplay">How to Play?</a>
            <a className="menu-items" href="/contact">Contact</a>
            <a className="menu-items" href="/login">Login</a>
            <a href="/signup"><button id="signup">Signup</button></a> */}
        </div>
        );
}

export default Navbar