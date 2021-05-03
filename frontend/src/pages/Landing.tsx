import React, { FC } from 'react';
import '../scss/Landing.scss';
import Navbar from './Components/Navbar'

export const Landing:FC = () => {
    return (
        <>
            <section>
                <Navbar />
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