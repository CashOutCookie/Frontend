import React from 'react';
import Navbar from './components/Navbar'
import './css/default.css'
import mainpage from './images/mainpage.png'
import transfer from './images/transfer.png'
import earn from './images/earn.png'

function Howtoplay() {
    return (
        <div>
            <Navbar name="How to Play" />
            <div className="tutorial-items">
                <div className="section">
                    <div className="tutorial-flex-item">
                        <h1>{'Introduction'}</h1>
                        <p>{"Who doesn't like a good Chocolate Chip Cookie? We've made a game where you can gain cookies to earn real life rewards (like Discord Nitros and many more in the future) and also learn stuff at the same time, scroll down to know how. "}</p>
                    </div>
                    <div className="tutorial-flex-item">
                        <img src={mainpage} alt="Main Page" />
                    </div>
                </div>
                <div className="section">
                    <div className="tutorial-flex-item">
                        <h1>{'Earning'}</h1>
                        <p>{'Answer simple multiple choice questions to earn cookies according to the time you take. Number of answers that can be answered per 12 hours is limited to 15. Categories of questions include Chemistry, General Knowledge and Computer Sciences. The max number of cookies that can be earned per question is 100.'}</p>
                    </div>
                    <div className="tutorial-flex-item">
                        <img src={earn} alt="Earning Page" />
                    </div>
                </div>
                <div className="section">
                    <div className="tutorial-flex-item">
                        <h1>{'Transferring'}</h1>
                        <p>{"We've made a transfer cookies feature where you can send a little love of cookies to your friends and family. Please don't make alternate accounts and break the rules. GLHF!"}</p>
                    </div>
                    <div className="tutorial-flex-item">
                        <img src={transfer} alt="Transferring Page" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Howtoplay