import React, { FC } from 'react';
import '../scss/Landing.scss';
import Navbar from './Components/Navbar'

export const Contact:FC = () => {
    return (
        <>
            <section className="landing">
                <Navbar />
                <article>
                    <h1>How do I contact you?</h1>
                    <h2>The fastest way to contact us for help or to report someone is through our Discord server.</h2>
                    <p>
                        You can join it here: <a href="https://discord.gg/KSmvMPCBeS">[Link]</a>
                    </p>
                </article>
            </section>
        </>
    )
}