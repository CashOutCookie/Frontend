import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { LoadingAnimation } from '../Components/Loading'
import '../../scss/Notifications.scss'
import '../../scss/leaderboard.scss'



const Rank = () => {

    const [loading, setLoading] = useState(true)
    const [wasError, setWasError] = useState(false)
    const [rank, setRank] = useState([])
    const history = useHistory()
    
    useEffect(() => {
            fetch(`https://heroku-moment.herokuapp.com/leaderboard`, {
                method: 'GET',
                headers: {
                    'Authorization': `JWT ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
    
                }
            })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                if (json === 'You need to be authenticated to use this API.') {
                    setWasError(true)
                } else if (json.detail === 'Error decoding signature.') {
                    setWasError(true)
                } else if (json.detail === 'Invalid signature.') {
                    setWasError(true)
                } else {                    
                    setRank(json)
                    console.log(json)
                }
                setTimeout(setLoading, 2000, false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    if (loading) {
        return <LoadingAnimation />
    } else if (wasError === true) {
        localStorage.removeItem('token')
        return <Redirect to="/login" />
    } else if (rank[0]) {
        let elements = []
        rank.forEach(element => {
            elements.push(
                <div onClick={() => history.push(`/user?id=${element.username}`)} className="notification-flex leaderboard">
                    <div className="notif-type">
                        <p>{element.balance}</p>
                    </div>
                    <div className="notif-desc">
                        <img alt="" src={element.image}></img>
                        <p>{element.username}</p>
                    </div>
                    <div className="notif-time">
                        <p>Acc: {element.accountnumber}</p>
                    </div>
                </div>
            )
        })
        return(
            <>
                {elements}
            </>
        )
    } else {
        return <></>
    }
}

export { Rank }