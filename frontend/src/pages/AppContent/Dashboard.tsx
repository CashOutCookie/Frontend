import React from 'react'
import bankGradient from '../../images/Gradients/Bank.png'
import workGradient from '../../images/Gradients/Work.png'
import spendGradient from '../../images/Gradients/Spend.png'

function Dashboard() {
    return(
        <div>

            <div className="dash-flex">
                <div className="dash-gradients-div">
                    <h1 className="dash-items">Bank</h1>
                    <img className="dash-gradients" alt="" src={bankGradient} />
                </div>
                <div className="dash-gradients-div">
                    <h1 className="dash-items">Work</h1>
                    <img className="dash-gradients" alt="" src={workGradient} />
                </div>
                <div className="dash-gradients-div">
                    <h1 className="dash-items">Spend</h1>
                    <img className="dash-gradients" alt="" src={spendGradient} />
                </div>
            </div>

            <div className="rank-balance-div">
                
            </div>

        </div>
    )
}

export default Dashboard