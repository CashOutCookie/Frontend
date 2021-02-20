import React from 'react';
import Lottie from 'react-lottie';
import Navbar from './Navbar.js';
import cookieAnimation from "./animations/cookie-animation.json";
import piggyAnimation from "./animations/piggy-animation.json"

const animationOne = {
    loop: true,
    autoplay: true,
    animationData: cookieAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const animationTwo = {
    loop: true,
    autoplay: true,
    animationData: piggyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
 
 function Home() {
        return (
          <div className="home-child">
            <Navbar name="Home"/>
              <div className="main">
                <div className="home-main">
                  <Lottie options={animationOne} height={400} width={400} isClickToPauseDisabled={true}/>
                  <h1 className="header-home">Play with a virtual currency and learn to control a real one.</h1>  
                  <a href="/dashboard"><button id="playNow">Play now</button></a> 
                  <Lottie options={animationTwo} height={400} width={400} isClickToPauseDisabled={true}/>
                </div>  
              </div>
          </div>
        )
};

export default Home

