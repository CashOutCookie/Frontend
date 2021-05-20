import React, { useState } from 'react';
import '../../scss/navbar.scss'

function Navbar() {
    
    const [sidebar, setSidebar] = useState(false)
    const toggle = () => {
        setSidebar(!sidebar) 
    }

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

                <div className="burger" onClick={toggle}>
                    <div>
                        <div className="line1 line"></div>
                        <div className="line2 line"></div>
                        <div className="line3 line"></div>
                    </div>
                </div>

                <div className={sidebar ? "navmodal-a" : "navmodal"}>
                        <a href="/">Home</a>
                        <a href="/rules">Rules</a>
                        <a href="/tutorial">Tutorial</a>
                        <a href="/prizes">Prizes</a>
                        <a href="/sponsor">Sponsor</a>
                        <a href="/contact">Contact</a>
                </div>

            </nav>
        </div>
    )
}

export default Navbar