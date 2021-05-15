import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import Animation from '../Components/Animations'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import Loading from '../../animations/loading.json'
import '../../scss/Notifications.scss'



const Notifications = () => {

    const [loading, setLoading] = useState(true)
    const [wasError, setWasError] = useState(false)
    const [notifications, setNotifications] = useState([])
    
    useEffect(() => {
        TimeAgo.addLocale(en)
            fetch(`http://localhost:8000/notifications`, {
                method: 'GET',
                headers: {
                    'Authorization': `JWT ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
    
                }
            })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setNotifications(json)
                if (json === 'You need to be authenticated to use this API.') {
                    setWasError(true)
                } else if (json.detail === 'Error decoding signature.') {
                    setWasError(true)
                }
                setTimeout(setLoading, 2000, false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    if (loading) {
        return(
            <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: "calc(40px + 2.2vw)", marginTop: "50px"}}>
                <Animation json={Loading} height="calc(18px + 8vw)" width="calc(18px + 8vw)" />
            </div>
        ) 
    } else if (wasError === true) {
        localStorage.removeItem('token')
        return <Redirect to="/login" />
    } else if (notifications[0]) {
        let elements = []
        notifications.forEach(notification => {
            const timeAgo = new TimeAgo('en-US')

            let notifTime = timeAgo.format(new Date(notification.time))

            elements.push(
                <div className="notification-flex">
                    <div className="notif-type">
                        <p>{notification.type}</p>
                    </div>
                    <div className="notif-desc">
                        <p>{notification.description}</p>
                    </div>
                    <div className="notif-time">
                        <p>{notifTime}</p>
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
        return(
            <>
            <p className="no-new-notifs">No new notifications right now</p>
            </>
        )
    }
}

export { Notifications }