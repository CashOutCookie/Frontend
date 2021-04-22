import React, { useState } from "react";
import axios from "axios";
import './css/default.css'
import './css/Main.css'
import contactJson from './animations/json/contact-animation.json'
import Navbar from './components/Navbar'
import Animation from './animations/Animations'

function Contact() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: `https://formspree.io/mwkwddbp`,
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Your message has been received!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div className="contact-main">
      <Navbar name="Contact" />
      <div className="contact-flex">
        <Animation name={contactJson} size={500} />
        <form onSubmit={handleOnSubmit} className="form-parent">
          <input id="contact-name" type="name" name="name" required placeholder="Name" />
          <input id="contact-subject" type="subject" name="subject" placeholder="Subject" />
          <input id="contact-email" type="email" name="email" required placeholder="Email" />
          <textarea id="contact-message" type="message" name="message" required placeholder="Message" />
          <button id="contact-button" type="submit" disabled={serverState.submitting}>
            {'Submit'}
          </button>
        </form>
      </div>
      {serverState.status && (
        <p id="contact-success-msg" className={!serverState.status.ok ? "errorMsg" : ""}>
          {serverState.status.msg}
        </p>
      )}
    </div>
  );
};

export default Contact;