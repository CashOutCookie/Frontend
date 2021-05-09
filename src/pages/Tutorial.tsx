import React from 'react';
import '../scss/Tutorial.scss';
import Navbar from './Components/Navbar'

export const Tutorial = () => {
    return (
        <>
            <section className="tutorial">
                <Navbar />
                <article>
                    <div className="tutorial-flex">
                        <div className="item">
                            <h1>Contents</h1>
                            <ul>
                                <a href="#earning"><li>How to Earn Cookies</li></a>
                            </ul>
                        </div>

                        <div className="item">
                            <h1 id="earning">How to Earn Cookies</h1>
                            <p>Cookies are CashoutCookie's virtual currency. They have no connection with any real currency, meaning you can learn to manage funds.</p>
                            <p>Cookies can be earned by completing quizzes, playing Capture the Flag, or even by getting a headstart by getting a transaction from a friend.</p>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}