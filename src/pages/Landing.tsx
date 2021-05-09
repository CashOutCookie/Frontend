import React, { FC } from 'react';
import '../scss/Landing.scss';
import Navbar from './Components/Navbar'

export const Landing:FC = () => {
    return (
        <>
            <section className="landing">
                <Navbar />
                <article>
                    <h1>Play Games - Earn Real Prizes</h1>
                    <h2>Yes, its that simple.</h2>
                    <p>
                        CashoutCookie is a real-life simulation of a currency represented as Cookies.
                        It is in no way related to a real currency but functions in the same way.
                        Every month, the top players receive prizes such as Discord Nitro.
                    </p>
                    <a className="playnow" href="/app">Play Now ▶</a>
                </article>
            </section>
        </>
    )
}