import React, { useState } from 'react';
import '../scss/passwordresetmodal.scss';


function PasswordReset() {


    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleClick = (event) =>{
        event.preventDefault()
    }
    
    const handlepasswordreset = (event) => {
        event.preventDefault()
        setMessage('Sending reset email...')
        fetch('http://localhost:8000/changepassword/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                if (json.user && json.user.username) {
                    setMessage("Password reset email sent, Make sure to your spam folder if email isn't there.")
                } else {
                    setMessage('Invalid Email.')
                }
            })
    }
    return (
        <>
            <div className="main">
                <h1>Login</h1>
                <div className="box">
                    <span className="close" onClick={handleClick}>&times;    </span>
                    <form onSubmit={handlepasswordreset}>
                        <p>Email</p>
                        <input onChange={e => setEmail(e.target.value)}></input>
                        <button type="submit" disabled={(!email ? true : false)}>Send Email</button>
                    </form>
                </div>
                <p className="info-message">{message}</p>
            </div>
        </>
    )
}

export default PasswordReset


