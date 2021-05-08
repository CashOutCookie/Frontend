import React, { useEffect, useState } from 'react'
// import { Redirect } from 'react-router-dom'
import bankGradient from '../../images/Gradients/Bank.png'
import workGradient from '../../images/Gradients/Work.png'
import spendGradient from '../../images/Gradients/Spend.png'

// const RedirectTo = (page) => {
//     return <Redirect to={`/${page}`} />
// }

function Dashboard() {

    const [rank, setRank] = useState()

    useEffect(() => {
        fetch('http://localhost:8000/whoami/', {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch((err) => {
            console.log(err)
        })
    })

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