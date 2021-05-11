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
                                <a href="#app"><li>How to interact with the App</li></a>
                                <a href="#earning"><li>How to Earn Cookies</li></a>
                                <a href="#games"><li>How to Play</li></a>
                            </ul>
                        </div>

                        <div className="item">
                            <h1 id="app"><li>How to interact with the App</li></h1>
                            <p>First, to navigate to CashoutCookie's App, click "Play Now" on our home page. You are now inside the app. You can now navigate through the panel by cycling through the icons on the left.</p>
                        </div>

                        <div className="item">
                            <h1 id="earning"><li>How to Earn Cookies</li></h1>
                            <p>Cookies are CashoutCookie's virtual currency. They have no connection with any real currency, meaning you can learn to manage funds.</p>
                            <p>Cookies can be earned by completing quizzes, playing Capture the Flag, or even by getting a headstart by getting a transaction from a friend.</p>
                        </div>

                        <div className="item">
                            <h1 id="games"><li>How to Play</li></h1>
                            <p>Time to play! In the <a href="#app">App</a>, navigate to a game you would like to play. [...]</p>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}