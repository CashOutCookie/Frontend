import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../scss/login.scss';
import Navbar from './Components/Navbar'

const Register = () => {
    return(
        <>
        </>
    )
}

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? false : false)

    const handleLogin = (event) => {
        event.preventDefault()
        console.log(username, password)
        setMessage('Loading...')
        fetch('http://localhost:8000/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username_or_email: username,
                password: password
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if (json.user && json.user.username) {
                localStorage.setItem('token', json.token)
                setIsLoggedIn(true)
            } else {
                setMessage('Unable to log-in with the provided credentials.')
            }
        })
    }
    if (!isLoggedIn) {
        return (
            <>
                <div className="login-parent">
                    <section className="login-section">
                        <h1>Login</h1>
                        <div className="login-box">
                            <form onSubmit={handleLogin}>
                                <p>Username or Email</p>
                                    <input required onChange={e => setUsername(e.target.value)}></input>
                                <p>Password</p>
                                    <input required onChange={e => setPassword(e.target.value)} type="password"></input>
                                <button type="submit">Login</button>
                            </form>
                                <div className="login-footer">
                                    <p>Don't have an account?</p>
                                    <p>Forgot password?</p>
                                </div>
                        </div>
                        <p className="login-message">{message}</p>
                    </section>
                </div>
            </>
        )
    } else {
        return(
            <>
                <Redirect to="/app" />
            </>
        )
    }
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