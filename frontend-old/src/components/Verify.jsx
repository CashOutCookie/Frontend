import React from 'react';
import '../css/Main.css'
import verifyAnimation from '../animations/json/verify-email.json'
import Animation from '../animations/Animations'

function Verify() {
    return (
        <div className="verify-parent">
            <div className="adjustLottie">
                <Animation name={verifyAnimation} size={450} />
            </div>
            <p className="verify-text">
                {'Congrats, you have successfully signed up for Cookie. Now head over to your email and press the big blue button we sent you to start using Cookie.'}
                <br />{'(Also check your spam)'}
            </p>
        </div>
    )
}

export default Verify;