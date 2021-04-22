import React from 'react';
import logo from '../images/logo.svg';
import Menu from './Menu'

function Navbar({ name }) {
    return (
        <div id="nav-bar">
            <Menu />
            <a className="logo-link" href="/"><img className="logo" alt="" src={logo}></img></a>
            <h1 className="nav-heading">{name}</h1>
        </div>
    );
}

export default Navbar