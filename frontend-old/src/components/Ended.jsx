import React from 'react';
import LazyLoad from 'react-lazyload';
// import '../css/NewCSS.css'
import badge from '../images/badge.svg'

function Ended() {
    document.getElementById('prev-web').style.background = '#F4F4F4';
    return (
        <div className="ended">

            <div>
                <p className="marquee">{`The giveaway for April, 2021 has ended and the winners have been selected. A new giveaway with new games and features will be announced soon!`}</p>
            </div>

            <LazyLoad height="50vh" once>
                <div className="gradient">
                    <h1 className="cookie-name">{`CashoutCookie`}</h1>
                    <a href="/contact"><button className="contact-btn-ended">{`Contact`}</button></a>
                </div>
            </LazyLoad>

            <h1 className="winners-h1">{'Winners'}</h1>
            <div className="winners-container">
                <div className="winner-box">
                    <img alt="" src={badge} className="badge" />
                    <h1>{`1st`}</h1>
                    <img alt="" src={`https://res.cloudinary.com/cashoutcookie/image/upload/v1/ProfilePictures/newagain_txsab6`} className="pfp" />
                    <p>{`Pbknowall [17046]`}</p>
                </div>
                <div className="winner-box">
                    <img alt="" src={badge} className="badge" />
                    <h1>{`2nd`}</h1>
                    <img alt="" src={`https://res.cloudinary.com/cashoutcookie/image/upload/v1/ProfilePictures/66269805_p0_master1200_pbufic`} className="pfp" />
                    <p>{`Altair [13011]`}</p>
                </div>
            </div>
        </div>
    )
}

export default Ended