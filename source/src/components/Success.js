import React, { Component } from 'react';
import Lottie from 'react-lottie';
import '../css/Main.css'
import successAnimation from '../animations/verify-success.json'
import {Redirect} from 'react-router-dom'

const animationOne = {
    loop: true,
    autoplay: true,
    animationData: successAnimation,
    resizeMode: 'cover',
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
      margin: 0,
    },
};
class Success extends Component {
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
                <div className="success-parent">
                        <div className="adjustLottie">
                            <Lottie options={animationOne} height={450} width={450} isClickToPauseDisabled={true}/>
                        </div>
                        <p className="verify-text">Thanks for verifying, Human. <br /> You can now use Cookie.</p>
                        <a href="/login"><button className="redirect-dashboard">Continue to Login</button></a>
                </div>
            )
        }
    }
}

export default Success;