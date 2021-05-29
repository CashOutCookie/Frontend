import React, { useState } from 'react';
import * as qs from 'query-string'
import '../scss/login.scss';
import Navbar from './Components/Navbar';

const PasswordResetConfirm = () => {
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const parsed = qs.parse(window.location.search)

    const handleSubmit = (event) => {
        event.preventDefault()
        setMessage('Loading')
        fetch(`https://api.cashoutcookie.com/confirmreset/${parsed.uidb64}/${parsed.token}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "new_password": password
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setMessage(json)
        })
        .catch((err) => setMessage(`There was an error: ${err}`))
    }
        return (
            <>
                <div className="login-main">
                    <h1>Password Reset</h1>
                    <div className="login-box reset-pass">
                        <form onSubmit={handleSubmit}>
                            <p className="login-passwordhead">Set New Password</p>
                            <input onChange={e => setPassword(e.target.value)} type="password"></input>
                            <button type="submit" disabled={password ? false : true}>Submit</button>
                        </form>
                    </div>
                    <p className="login-info-message password-reset-message">{message}</p>
                </div>
            </>
        )
};


const PRContent = () => {
    const Page = () => {
        return <PasswordResetConfirm />
    }
    return(
        <>
            <Navbar />
            <Page />
        </>
    )
}

export { PRContent };