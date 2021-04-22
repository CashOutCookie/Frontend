import React, { useState } from "react";
import axios from "axios";
import Navbar from './Navbar'
import '../css/email.css'
import { useParams } from "react-router-dom";


function ConfirmReset() {
  let { uidb64 } = useParams();
  let { token } = useParams();

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
    data: {
      password: "",
      confirmpassword: ""
    }
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
  const handleOnSubmit = (e) => {
    e.preventDefault()
    let form = serverState.data
    console.log(serverState)
    if (form.password !== form.confirmpassword) {
      alert("Passwords don't match");
    } else {
      axios({
        method: "PATCH",
        url: `${process.env.REACT_APP_API_BASE_URL}/api/confirmreset/${uidb64}/${token}/`,
        data: {
          new_password: form.password,
        },
        headers: { 'Content-Type': 'application/json' },
      })
        .then(r => {
          handleServerResponse(true, "Password Reset Successful!", e.target);
        })
        .catch(r => {
          handleServerResponse(false, `The password is very short and common, passwords must have the length of atleast 8`, e.target);
        })
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    setServerState({
      data: Object.assign({}, serverState.data, { [e.target.name]: e.target.value })
    })
  }
  return (
    <div className="contact-main">
      <Navbar name="Confirm Password" />
      <div className="contact-flex">
        <form onSubmit={handleOnSubmit} className="form-parent">
          <input onChange={handleChange} id="contact-name" type="password" name="password" required placeholder="New Password" />
          <input onChange={handleChange} id="contact-name" type="password" name="confirmpassword" required placeholder="Confirm Password" />
          <button id="passwordresetconfirm-button" type="submit" disabled={serverState.submitting}>
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
export default ConfirmReset;


