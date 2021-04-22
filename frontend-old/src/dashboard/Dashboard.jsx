import React from 'react';
import Navbar from '../components/Navbar'
import { Redirect } from 'react-router-dom'
import '../css/Dash.css'
import Animation from '../animations/Animations'
import workJson from '../animations/json/work-animation.json'
import transferJson from '../animations/json/transfer.json'
import gambleJson from '../animations/json/gamble.json'

function Dashboard() {
    let loggedIn = localStorage.getItem('username') ? true : false;
    return (
        <div>
            {loggedIn ? '' : <Redirect to="/login" />}
            <Navbar name="Dashboard" />
            <div className="dash-parent">


                <div className="dash-items" id="transfer-item">
                    <Animation name={transferJson} size={300} />
                    <p className="dash-items-name">Transfer Cookies</p>
                    <p className="dash-items-details">Share your earned cookies with your friends and family</p>
                    <a href="/transfer"><button className="dash-btn">Transfer</button></a>
                </div>
                <div className="dash-items" id="earn-item">
                    <Animation name={workJson} size={300} />
                    <p className="dash-items-name">Earn Cookies</p>
                    <p className="dash-items-details">Answer questions to earn cookies and increase your ranking</p>
                    <a href="/quiz"><button className="dash-btn">Earn</button></a>
                </div>
                <div className="dash-items" id="gamble-item">
                    <Animation name={gambleJson} size={300} />
                    <p className="dash-items-name">Gamble Cookies</p>
                    <p className="dash-items-details">You can gamble your way into the top or lose it all</p>
                    <a href="/gamble"><button className="dash-btn">Gamble</button></a>
                </div>
            </div>
        </div>
    )
}

export default Dashboard