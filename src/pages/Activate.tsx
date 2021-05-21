import React, { FC } from 'react';
import '../scss/Landing.scss';
import Navbar from './Components/Navbar'

export const Activate:FC = () => {
    return (
        <>
            <section className="landing">
                <Navbar />
                <article>
                    <h1>Verify your email.</h1>
                    <h2>You have succesfully registered for CashOutCookie. Now go over to your email and press that big blue button to activate your account.</h2>
                    <p>
                        Also check your spam for the email.
                    </p>
                </article>
            </section>
        </>
    )
}