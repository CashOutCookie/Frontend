import React, { useState } from 'react';
import axios from 'axios';
import './css/default.css'
import reportJson from './animations/json/report.json'
import Navbar from './components/Navbar'
import Animation from './animations/Animations'

function Report() {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null,
        data: {
            name: "",
            subject: "",
            email: "",
            message: ""
        }
    })
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg },
            data: {
                name: "",
                subject: "",
                email: "",
                message: ""
            }
        })
        if (ok) form.reset();
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        let form = serverState.data
        console.log(serverState)
        axios({
            method: "POST",
            url: process.env.REACT_APP_API_BASE_URL + "/api/report/",
            data: {
                name: form.name,
                subject: form.subject,
                email: form.email,
                message: form.message
            },
            headers: { 'Content-Type': 'application/json' },
        })
            .then(r => {
                handleServerResponse(true, "Your report has been sent. Thank you for the support during this inital stage!", e.target);
            })
            .catch(r => {
                handleServerResponse(false, `An Error Occurred: ${r.message}`, e.target);
            })
    }
    const handleChange = (e) => {
        e.preventDefault()
        setServerState({
            data: Object.assign({}, serverState.data, { [e.target.name]: e.target.value })
        })
    }
    return (
        <div className="contact-main">
            <Navbar name="Report" />
            <div className="contact-flex">
                <Animation name={reportJson} size={500} />
                <form className="form-parent" onSubmit={handleOnSubmit}>
                    <input id="contact-name" name="name" onChange={handleChange} placeholder="Name" required type="name" value={serverState.data.name} />
                    <input id="contact-subject" name="subject" onChange={handleChange} placeholder="Issue Subject" required type="subject" value={serverState.data.subject} />
                    <input id="contact-email" name="email" onChange={handleChange} placeholder="Email" required type="email" value={serverState.data.email} />
                    <textarea id="contact-message" name="message" onChange={handleChange} placeholder="Description" required type="message" value={serverState.data.message} />
                    <button disabled={serverState.submitting} id="contact-button" type="submit">
                        {'Submit'}
                    </button>
                </form>
            </div>
            {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""} id="contact-success-msg">
                    {serverState.status.msg}
                </p>
            )}
        </div>
    )
}

export default Report