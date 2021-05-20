import React, { FC } from 'react';
import '../scss/Landing.scss';
import Navbar from './Components/Navbar'

export const Prizes:FC = () => {
    return (
        <>
            <section className="landing">
                <Navbar />
                <article>
                    <h1>Enough talk. What are the prizes?</h1>
                    <h2>We know what you're most excited about, so here's what it is</h2>
                    <p>
                        2 of the top players will receive 2 months of Discord Nitro + Server Boost.
                    </p>
                    <a className="playnow" href="/app">Play Now ▶</a>
                </article>
            </section>
        </>
    )
}