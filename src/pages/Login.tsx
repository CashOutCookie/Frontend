import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../scss/login.scss';
import Navbar from './Components/Navbar';

import PasswordReset from './Components/PasswordReset'

const Register = () => {
    return(
        <>
        </>
    )
}

const Login = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? false : false)

    const handleLogin = (event) => {
        event.preventDefault()
        console.log(username, password)
        setMessage('Trying to log in...')
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
                    setMessage('Unable to login with the credentials provided.')
                }
            })
    }

    const open_modal = () => {
        setModalIsOpen(true)
    }
    
    const close_modal = () => {
        setModalIsOpen(false)
    }


    if (!isLoggedIn) {
        return (
            <>
                <div className="login-main">
                    <h1>Login</h1>
                    <div className="login-box">
                        <form onSubmit={handleLogin}>
                            <p>Username or Email</p>
                            <input onChange={e => setUsername(e.target.value)}></input>
                            <p className="login-passwordhead">Password</p>
                            <input onChange={e => setPassword(e.target.value)} type="password"></input>
                            <button type="submit" disabled={(!username || !password ? true: false)}>Login</button>
                        </form>
                        <div className="login-footer">
                            <p>Don't have an account?</p>
                            <p onClick={open_modal} className="forgotpassword-btn">Forgot your password?</p>
                            {modalIsOpen ? <PasswordReset setModalIsOpen={close_modal} /> : null}
                        </div>
                    </div>
                    <p className="login-info-message">{message}</p>
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