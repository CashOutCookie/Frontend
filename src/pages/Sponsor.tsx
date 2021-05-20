import React, { FC } from 'react';
import '../scss/Landing.scss';
import Navbar from './Components/Navbar'

export const Sponsor:FC = () => {
    return (
        <>
            <section className="landing">
                <Navbar />
                <article>
                    <h1>Who's this generous person sponsoring you?</h1>
                    <h2>He is the owner of a Chemistry Discord server</h2>
                    <p>
                        You can help him by joining his Discord server. Our utmost thanks goes to him for making this game possible.
                    </p>
                </article>
            </section>
        </>
    )
}