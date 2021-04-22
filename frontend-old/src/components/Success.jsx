import React from 'react';
import '../css/Main.css'
import successAnimation from '../animations/json/verify-success.json'
import Animation from '../animations/Animations'


function Success() {
    return (
        <div className="success-parent">
            <div className="adjustLottie">
                <Animation name={successAnimation} size={450} />
            </div>
            <p className="verify-text">{'Thanks for verifying, Human.'} <br /> {'You can now use Cookie.'}</p>
            <a href="/login"><button className="redirect-dashboard">{'Continue to Login'}</button></a>
        </div>
    )
}

export default Success;