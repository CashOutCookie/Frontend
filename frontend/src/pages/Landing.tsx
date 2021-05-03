import React, { FC } from 'react';
import '../scss/Landing.scss';

export const Landing:FC = () => {
    return (
        <>
            <section>
                <nav>
                    <div className="logo">CC.</div>
                    <div className="nav-contents">
                        <span className="nav-content" id="HomeButton"><a href="/#">Home</a></span>
                        <span className="nav-content" id="TutorialButton"><a href="/#">Tutorial</a></span>
                        <span className="nav-content" id="PrizesButton"><a href="/#">Prizes</a></span>
                        <span className="nav-content" id="SponsorButton"><a href="/#">Sponsor</a></span>
                        <span className="nav-content" id="ContactButton"><a href="/#">Contact</a></span>
                    </div>
                </nav>
                <article>
                    <h1>Play games to earn real Prizes</h1>
                    <h2> Yes, its that simple.</h2>
                    <p>
                        CashoutCookie is a real life simulation of a currency referred to as Cookies. It is no way.
                        related to a real currency but functions simlarly. The top players every month get real prizes like Discord Nitros.
                    </p>
                    <button>Play Now ▶</button>
                </article>
            </section>
        </>
    )
}