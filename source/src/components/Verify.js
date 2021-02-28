import React, { Component } from 'react';
import Lottie from 'react-lottie';
import '../css/Main.css'
import Navbar from '../components/Navbar'
import verifyAnimation from '../animations/verify-email.json'
import {Redirect} from 'react-router-dom'

const animationOne = {
    loop: true,
    autoplay: true,
    animationData: verifyAnimation,
    resizeMode: 'cover',
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
      margin: 0,
    },
};
class Verify extends Component {
    constructor(props) {
        super(props);
        this.state = {
          displayed_form: '',
          logged_in: localStorage.getItem('token') ? true : false,
          username: ''
        };
      }
    
    render() {
        if (this.state.logged_in) {
            return(
                <Redirect to="/dashboard" />
            )
    } else {
        return(
            <div className="verify-parent">
                    <Navbar name="Verify" />
                    <div className="adjustLottie">
                    <Lottie options={animationOne} height={450} width={450} isClickToPauseDisabled={true}/>
                    </div>
                    <p className="verify-text">Congrats, you've successfully signed up for Cookie. Now head over to your email and press the big blue button we sent you to start using Cookie. <br /> (Also check your spam)</p>
            </div>
        )
    }
    }
}

export default Verify;