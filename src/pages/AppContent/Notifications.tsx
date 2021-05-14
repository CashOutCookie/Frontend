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
                setTimeout(setLoading, 2000, false)
            })
            .catch((err) => {
                console.log(err)
                setWasError(true)
            })
    }, [])

    if (loading) {
        return(
            <div style={{ display: 'flex', alignItems: 'flex-start'}}>
                <Animation json={Loading} height="calc(150px + 10vw)" width="calc(150px + 10vw)" />
            </div>
        ) 
    } else if (wasError) {
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