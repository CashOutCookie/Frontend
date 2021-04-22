import React from 'react';
import Animation from './animations/Animations'
import cookieAnimation from "./animations/json/cookie-animation.json";
import nitroAnimation from "./animations/json/nitro-animation.json";
import Navbar from './components/Navbar';
function Home() {
  return (
    <div className="home-child">
      <Navbar name="Home" />
      <div className="main">

        <div className="home-main">

          <div className="playnow-home">
            <Animation name={cookieAnimation} size={300} />
            <h1 className="header-home">{'Answer Questions, Gain Cookies, Earn real Rewards.'}</h1>
            <a href="/dashboard"><button id="playNow">{'Play now'}</button></a>
          </div>

          <div className="nitro-details">
            <Animation name={nitroAnimation} size={300} />
            <div className="nitro-div">
              <h1 className="nitro-text">{'Discord Nitro rewards every month to the highest ranking players'}</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default Home

