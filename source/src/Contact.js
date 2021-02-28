import React, { useState } from "react";
import axios from "axios";
import './css/default.css'
import Lottie from 'react-lottie';
import contactJson from './animations/contact-animation.json'
import Navbar from './components/Navbar'
const contactAnimation = {
  loop: true,
  autoplay: true,
  animationData: contactJson,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

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
      url: "https://formspree.io/xeqpwwqj",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Your message has been received!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  let animationSize = 500;
  return (
    <div className="contact-main">
      <Navbar name="Contact" />
    <div className="contact-flex">
    <Lottie options={contactAnimation} height={animationSize} width={animationSize} isClickToPauseDisabled={true}/>
      <form onSubmit={handleOnSubmit} className="form-parent">
      <input id="contact-name" type="name" name="name" required placeholder="Name"/>
      <input id="contact-subject" type="subject" name="subject" placeholder="Subject"/>
        <input id="contact-email" type="email" name="email" required placeholder="Email"/>
        <textarea id="contact-message" type="message" name="message" required placeholder="Message"></textarea>
        <button id="contact-button" type="submit" disabled={serverState.submitting}>
          Submit
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