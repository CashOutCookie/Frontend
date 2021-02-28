import React from 'react';
import Lottie from 'react-lottie';
import cookieAnimation from "./animations/cookie-animation.json";
import nitroAnimation from "./animations/nitro-animation.json"
import Navbar from './components/Navbar.js'

const animationOne = {
    loop: true,
    autoplay: true,
    animationData: cookieAnimation,
    resizeMode: 'cover',
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
      margin: 0,
    },
  };
  const animationTwo = {
    loop: true,
    autoplay: true,
    animationData: nitroAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet"
    }
  };
 
 function Home() {
        return (
          <div className="home-child">
            <Navbar name="Home"/>
              <div className="main">

                <div className="home-main">

                  <div className="playnow-home">
                    <Lottie options={animationOne} height={300} width={300} isClickToPauseDisabled={true}/>
                    <h1 className="header-home">Play with a virtual currency and learn to control a real one.</h1>  
                    <a href="/dashboard"><button id="playNow">Play now</button></a> 
                  </div>

                    <div className="nitro-details">
                    <Lottie options={animationTwo} height={300} width={300} isClickToPauseDisabled={true}/>
                      <div className="nitro-div">
                        <h1 className="nitro-text">10 Discord Nitro rewards every month to the highest ranking players*</h1>
                      </div>
                    </div>

                </div>  
              </div>
          </div>
        )
};

export default Home

