import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Logout } from '../Components/CheckLogin'
import bankGradient from '../../images/Gradients/Bank.png'
import workGradient from '../../images/Gradients/Work.png'
import spendGradient from '../../images/Gradients/Spend.png'


function Dashboard() {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [wasError, setWasError] = useState(false)
    let history = useHistory();
   

    useEffect(() => {
        fetch('http://localhost:8000/whoami/', {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            if (json.detail === 'Error decoding signature.') {
                console.log(json)
                localStorage.removeItem('token')
                setWasError(true)
            } else {
                setData(json)
                setLoading(false)
                console.log(json)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    if (wasError) {
        return <Logout />
    } else if (loading) {
        return <></>
    } else {
         // @ts-ignore
            let rankWidth = data.rank ? Number(data.rank.split('/')[0]) : 0
        // @ts-ignore
            let totalWidth = data.rank ? Number(data.rank.split('/')[1]) : 0
            let actualWidth = ((totalWidth - rankWidth) / totalWidth) * 100
        return(
            <div className="dash-overflow">
    
                <div className="dash-flex">
                    <div onClick={() => window.location.href = '/bank'} className="dash-gradients-div">
                        <h1 className="dash-items">Bank</h1>
                        <img className="dash-gradients" alt="" src={bankGradient} />
                    </div>
                    <div onClick={() => window.location.href = '/work'} className="dash-gradients-div">
                        <h1 className="dash-items">Work</h1>
                        <img className="dash-gradients" alt="" src={workGradient} />
                    </div>
                    <div onClick={() => window.location.href = '/spend'} className="dash-gradients-div">
                        <h1 className="dash-items">Spend</h1>
                        <img className="dash-gradients" alt="" src={spendGradient} />
                    </div>
                </div>
    
                <div className="rank-balance-div">
                <div className="profile-flex">
                                <div className="rank-in-card">
                                    <p className="rank-profile">Rank</p>
                                    <p className="actual-in-card">#{
                                        // @ts-ignore
                                        data.rank ? data.rank : ''
                                    }</p>
                                </div>
                                <div className="balance-in-card">
                                    <p className="balance-profile">Balance</p>
                                    <p className="actual-in-card">{
                                        // @ts-ignore
                                        data.balance
                                    }</p>
                                </div>
                            </div>
                                <div className="progress-profile">
                                    <div className="slider-progress-profile" style={{
                                        // @ts-ignore
                                            width: `${actualWidth}%`
                                        }}>
                                    </div>
                                </div>
                </div>
    
            </div>
        )
    }
}

export default Dashboard