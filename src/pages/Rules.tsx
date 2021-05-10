import React from 'react';
import '../scss/Rules.scss';
import Navbar from './Components/Navbar'

export const Rules = () => {
    return (
        <>
            <section className="rules">
            <Navbar />
                <article>
                    <div className="section">
                        <h1>An Introduction</h1>
                        <p>
                            CashoutCookie is an online platform which sustains a virtual currency represented as Cookies.
                            However, there are limitations, so, to involve yourself, you will have to follow some of CashoutCookie's simple rules.
                        </p>
                    </div>
                    <h1>Rules</h1>
                    <div className="section">
                        <ul>
                            <li>Any types of exploits found throughout CashoutCookie's app are stricly prohibited and should be reported if found.</li>
                            <li>b</li>
                            <li>c</li>
                            <li>d</li>
                        </ul>
                    </div>
                </article>
            </section>
        </>
    )
}