import React from 'react'
import '../../scss/navbar.scss'

function Navbar() {
    return(
        <div>
            <nav>
                <div className="logo">
                    <a href="/"><h1>cc.</h1></a>
                </div>

                <div className="links">
                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/rules">Rules</a></li>
                        <li><a href="/tutorial">Tutorial</a></li>
                        <li><a href="/prizes">Prizes</a></li>
                        <li><a href="/sponsor">Sponsor</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="burger">
                    <div>
                        <div className="line1 line"></div>
                        <div className="line2 line"></div>
                        <div className="line3 line"></div>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar