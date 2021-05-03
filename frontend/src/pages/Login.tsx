import React, { useState } from 'react';
import '../scss/login.scss';
import Navbar from './Components/Navbar'

const Register = () => {
    return(
        <>
        </>
    )
}

const Login = () => {
    return (
        <>
            <div className="login-parent">
                <section className="login-section">
                    <h1>Login</h1>
                    <div className="login-box">
                        <form>
                            <p>Username or Email</p>
                            <input></input>
                            <p>Password</p>
                            <input type="password"></input>
                            <button type="submit">Login</button>
                            <div className="login-footer">
                                <p>Don't have an account?</p>
                                <p>Forgot password?</p>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
};


const LoginContent = () => {

    const [whichPage, setWhichPage] = useState('Login')

    const Page = () => {
        if (whichPage === 'Login') {
            return <Login />
        } else {
            return <Register />
        }
    }
    return(
        <>
            <Navbar />
            <Page />
        </>
    )
}

export { LoginContent };