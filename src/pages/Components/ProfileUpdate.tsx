import React, { useState } from 'react';
import '../../scss/profileupdate.scss'
import uploadimage from '../../images/upload-image.svg';

function ProfileUpdate(props) {

    const [username, setUsername] = useState('')
    const [image, setImage] = useState('')
    const [bio, setBio] = useState('')
    const [twitter, setTwitter] = useState('')
    const [discord, setDiscord] = useState('')
    const [location, setLocation] = useState('')

    const handleclose = () => {
        props.setModalIsOpen(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(username)
        console.log(image)
        const changedData = {
            username: username ? username : props.data.username,
            bio: bio ? bio : props.data.bio,
            twitter: twitter ? twitter : props.data.twitterusername,
            discord: discord ? discord : props.data.discord,
            location: location ? location : props.data.location,
        }
        fetch('http://localhost:8000/profileupdate/', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(changedData)
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
            })
        handleclose()
    }

    return (
        <>
            <div className="profileupdate-main">
                <div className="profileupdate-box">
                    <span className="profileupdate-close" onClick={handleclose}>&times;</span>
                    <form onSubmit={handleSubmit}>
                        <h1>Profile Update</h1>
                        <div className="profileupdate-allitemsparent">
                            <div className="profileupdate-inputarea">
                                <p>Username</p>
                                <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" type="text" value={props.data.username}></input>
                                <p>Bio</p>
                                <textarea onChange={(e) => setBio(e.target.value)} placeholder="Bio" value={props.data.bio}></textarea>
                                <p>Twitter</p>
                                <input onChange={(e) => setTwitter(e.target.value)} placeholder="Twitter" type="text" value={props.data.twitterusername}></input>
                                <p>Discord</p>
                                <input onChange={(e) => setDiscord(e.target.value)} placeholder="Discord" type="text" value={props.data.discord}></input>
                                <p>Location</p>
                                <input onChange={(e) => setLocation(e.target.value)} placeholder="Location" type="text" value={props.data.location}></input>
                            </div>
                            <div className="profileupdate-imagesection">
                                <img alt="" src={props.data.image} />
                                <input id="profileupdate-hiddeninput" type="file" />
                                <label htmlFor="profileupdate-hiddeninput"><img alt="" src={uploadimage} /></label>
                            </div>
                        </div>
                        <button type="submit" disabled={(username || bio || twitter || discord || location || image ? false : true)}>Save</button>
                    </form>

                </div>

            </div>
        </>
    )
}

export default ProfileUpdate
