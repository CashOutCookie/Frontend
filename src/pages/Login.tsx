import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../scss/login.scss';
import Navbar from './Components/Navbar';

import PasswordReset from './Components/PasswordReset'

const Login = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [whichPlatform, setWhichPlatform] = useState('Login')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState((localStorage.getItem('token') && !redirect) ? true : false)

    const handleLogin = (event) => {
        setMessage('Loading...')
        event.preventDefault()
        const platform = whichPlatform.toLowerCase()

        const loginData = {
            username_or_email: username,
            password: password
        }
        const registerData = {
            username: username,
            email: email,
            password: password
        }

        fetch(`https://heroku-moment.herokuapp.com/${platform}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(platform === 'login' ? loginData : registerData)
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                if (json.user && json.user.username) {
                    localStorage.setItem('token', json.token)
                    setIsLoggedIn(true)
                } else if (json.token) {
                    setMessage('You are succesfully registered')
                    localStorage.setItem('token', json.token)
                    setTimeout(() => setRedirect(true), 1000)
                } else {
                    setMessage('Unable to login/signup with the credentials provided.')
                }
            })
    }

    const open_modal = () => {
        setModalIsOpen(true)
    }
    
    const close_modal = () => {
        setModalIsOpen(false)
    }


    if (!isLoggedIn && !redirect) {
        return (
            <>
                <div className="login-main">
                    <h1>{whichPlatform}</h1>
                    <div className={whichPlatform === "Login" ? "login-box" : "login-box register"}>

                        <form onSubmit={handleLogin}>
                            <p className="login-email">{whichPlatform === 'Login' ? 'Username or Email' : 'Username'}</p>
                            <input onChange={e => setUsername(e.target.value)}></input>
                            <p style={{ display: (whichPlatform === 'Login' ? 'none' : '')}} className="login-email">{whichPlatform === 'Login' ? '' : 'Email'}</p>
                            <input style={{ display: (whichPlatform === 'Login' ? 'none' : '')}} onChange={e => setEmail(e.target.value)}></input>
                            <p className="login-passwordhead">Password</p>
                            <input onChange={e => setPassword(e.target.value)} type="password"></input>
                            <button type="submit" disabled={(!username || !password ? true: false)}>{whichPlatform}</button>
                        </form>

                        <div className="login-footer">
                            <p onClick={() => setWhichPlatform(whichPlatform === 'Login' ? 'Register' : 'Login')}>{whichPlatform === 'Login' ? "Don't have an account?" : 'Already have an account?'}</p>
                            <p onClick={open_modal} className="forgotpassword-btn">Forgot your password?</p>
                            {modalIsOpen ? <PasswordReset setModalIsOpen={close_modal} /> : null}
                        </div>
                    </div>
                    <p className="login-info-message">{message}</p>
                </div>
            </>
        )
    } else if (redirect) {
        return <Redirect to="/activate" />
    } else if (isLoggedIn && !redirect) {
        return(
            <>
                <Redirect to="/app" />
            </>
        )
    }
};


const LoginContent = () => {
    const Page = () => {
        return <Login />
    }
    return(
        <>
            <Navbar />
            <Page />
        </>
    )
}

export { LoginContent };