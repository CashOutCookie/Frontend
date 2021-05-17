import React, { useState, useEffect } from 'react'
import dateFormat from 'dateformat'
import { Logout } from '../Components/CheckLogin'
import Animation from '../Components/Animations'
import Loading from '../../animations/loading.json'
import '../../scss/myprofile.scss'

const MyProfile = () => {
    const [loading, setLoading] = useState(true)
    const [wasError, setWasError] = useState(false)
    const [data, setData] = useState()

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
                console.log(json)
                setData(json)
                setTimeout(setLoading, 1000, false)
            }
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
    } else if (wasError) {
        return <Logout />
    } else {
        return (
            <>
                <div className="main-content">
                    <div className="left-flex-profile">

                        <div className="profile-section-one">
                            <img className="pfp" alt="" src={
                                // @ts-ignore
                                data.image
                            } />
                            <button onClick={() => console.log('Do stuff!')} className="edit-profile">Edit Profile</button>
                            <p id="bio">{
                                // @ts-ignore
                                data.bio
                            }</p>
                        </div>

                        <div className="profile-section-two">
                            <p className="username">{
                                // @ts-ignore
                                data.username
                            }</p>
                            <p className="params">Account Number: <p className="value">{
                                // @ts-ignore
                                data.accountnumber
                            }</p></p>
                            <p className="params">Location: <p className="value">{
                                // @ts-ignore
                                data.location
                            }</p></p>
                            <p className="params">Twitter: <p className="value">{
                                // @ts-ignore
                                <a className="twitter-profile" href={`https://twitter.com`}>@putin</a>
                            }</p></p>
                            <p className="params">Discord:</p>
                            <p className="params">Joined On: <p className="value">{
                                // @ts-ignore
                                dateFormat(new Date(data.date_joined), "mmmm dS, yyyy")
                            }</p></p>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export { MyProfile }