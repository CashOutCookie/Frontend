import React, { FC } from 'react';
import '../scss/Landing.scss';
import Navbar from './Components/Navbar'

export const Success:FC = () => {
    return (
        <>
            <section className="landing">
                <Navbar />
                <article>
                    <h1>Email verified succesfully.</h1>
                    <h2>Thank you for verifying your email, human. We hope that you enjoy the game as much as we do.</h2>
                    <p>
                        Also check out the <a href="/rules">rules page</a> and join our Sponsor's <a href="https://discord.gg/teFD7JGbJa">Discord server</a> to be eligible for the giveaway.
                        <br/>
                        You can now <a href="/login">Login</a> to your account and start earning some cookies.
                    </p>
                </article>
            </section>
        </>
    )
}