import React, { useState, useEffect } from 'react'
import dateFormat from 'dateformat'
import { Logout } from '../Components/CheckLogin'
import ProfileUpdate from '../Components/ProfileUpdate'
import Animation from '../Components/Animations'
import Loading from '../../animations/loading.json'
import '../../scss/myprofile.scss'

const MyProfile = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const [wasError, setWasError] = useState(false)
    const [data, setData] = useState()
    const [message, setMessage] = useState('')

    useEffect(() => {
        fetch('https://heroku-moment.herokuapp.com/whoami/', {
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
                console.log(loading)
                setTimeout(setLoading, 1000, false)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }, [loading])
    

    if (loading) {
        return(
            <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: "calc(40px + 2.2vw)", marginTop: "50px"}}>
                <Animation json={Loading} height="calc(18px + 8vw)" width="calc(18px + 8vw)" />
            </div>
        )
    } else if (wasError) {
        return <Logout />
    } else {
        // @ts-ignore
        let rankWidth = data.rank ? Number(data.rank.split('/')[0]) : 0
        // @ts-ignore
        let totalWidth = data.rank ? Number(data.rank.split('/')[1]) : 0
        
        let actualWidth = ((totalWidth - rankWidth) / totalWidth) * 100

        console.log(actualWidth, rankWidth, totalWidth)

        return (
            <>
            {modalIsOpen ? <ProfileUpdate setModalIsOpen={setModalIsOpen} data={data} changeData={setData} changeLoading={setLoading} changeMessage={setMessage} /> : null}
                <div className="main-content">
                    <div className="left-flex-profile">

                        <div className="profile-section-one">
                            <img className="pfp" alt="" src={
                                // @ts-ignore
                                data.image
                            } />
                            <button onClick={() => setModalIsOpen(true)} className="edit-profile">Edit Profile</button>
                        </div>
                            

                        <div className="profile-section-two">
                            <p className="username">{
                                // @ts-ignore
                                data.username ? data.username : ''
                            }</p>
                            <p className="params">Account Number: <p className="value">{
                                // @ts-ignore
                                data.accountnumber ? data.accountnumber : ''
                            }</p></p>
                            <p className="params">Location: <p className="value">{
                                // @ts-ignore
                                data.location ? data.location : ''
                            }</p></p>
                            <p className="params">Twitter: <p className="value">{
                                // @ts-ignore
                                data.twitterusername ? <a className="twitter-profile" href={`https://twitter.com/${data.twitterusername}`}>{data.twitterusername}</a> : ''
                            }</p></p>
                            <p className="params">Discord: {
                                // @ts-ignore
                                <p className="value">{data.discord ? data.discord : ''}</p>
                            }</p>
                            <p className="params">Joined On: <p className="value">{
                                // @ts-ignore
                                data.date_joined ? dateFormat(new Date(data.date_joined), "mmmm dS, yyyy") : ''
                            }</p></p>
                        </div>
                    </div>
                    

                    <div className="profile-down-flex">
                        <p id="bio">{
                                    // @ts-ignore
                                    data.bio
                                }</p>
                        
                            <div className="profile-rank-card">

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

                    <p>{message}</p>                    

                </div>
            </>
        )
    }
}

export { MyProfile }