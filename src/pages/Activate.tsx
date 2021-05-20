import React, { FC } from 'react';
import '../scss/Landing.scss';
import Navbar from './Components/Navbar'

export const Activate:FC = () => {
    return (
        <>
            <section className="landing">
                <Navbar />
                <article>
                    <h1>You have succesfully registered for CashOutCookie.</h1>
                    <h2>Go to your email and press that big blue button to activate your account.</h2>
                    <p>
                        Also check your spam for the email.
                    </p>
                </article>
            </section>
        </>
    )
}