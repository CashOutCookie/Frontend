import React, { useState } from 'react';
import '../../scss/passwordreset.scss'

function PasswordReset(props) {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleclose = () => {
        props.setModalIsOpen(false)
    }

    const handleEmail = (event) => {
        event.preventDefault()
        setMessage('Sending password reset email...')
        fetch('http://localhost:8000/changepassword/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        })   
            .then(res => res.json())
            .then(json => {
                if(json==="Password reset link sent to your email!"){
                    setMessage(json)
                }else{
                    setMessage("There are no accounts registered with this email.")
                }
                
            })
    }

    return (
        <>
            <div className="passwordreset-main">
                <div className="passwordreset-box">
                    <span className="passwordreset-close" onClick={handleclose}>&times;</span>
                    <form onSubmit={handleEmail}>
                    <h1>Enter your email where we can send you instructions to reset your password</h1>
                        <input onChange={e => setEmail(e.target.value)} placeholder="Email" type="email"></input>
                        <button type="submit" disabled={(!email ? true : false)}>Send Email</button>
                        <p className="passwordreset-info-message">{message}</p>
                    </form>
                </div>

            </div>
        </>
    )
}

export default PasswordReset
