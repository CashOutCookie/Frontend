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
                                <a href="#ctf"><li>How to Play CTF</li></a>
                                <a href="#hidden"><li>More Cookies!</li></a>
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
                            <h1 id="ctf"><li>How to Play CTF</li></h1>
                            <p>Time to play! In <a href="/ctf">CTF</a>, You have to hunt for alphanumber strings termed as flags. There are 10 flags in total. Each flag is hidden somewhere and the instructions are given on how to find it. It will get harder progressively.</p>
                        </div>

                        <div className="item">
                            <h1 id="hidden"><li>Any hidden ways to earn more cookies?</li></h1>
                            <p>Join our <a href="https://discord.gg/KSmvMPCBeS">discord server</a> to find a secret game to earn even more cookies!</p>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}