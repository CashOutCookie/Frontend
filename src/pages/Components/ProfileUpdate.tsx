import React, { useState } from 'react';
import '../../scss/profileupdate.scss'

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
        fetch('http://localhost:8000/profileupdate/', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjIxMDQzMDMzLCJlbWFpbCI6ImFkbWluQGFkbWluLnh5eiJ9.ZmXjgkMwHX38TIhA7vZYMxV0sQff_WvOxC-3bwNCXDc'
            },
            body: JSON.stringify({
                bio: bio
            })
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
                        <input onChange={e => setImage(e.target.value)} type="file" accept="image"></input>
                        <input onChange={e => setUsername(e.target.value)} placeholder="Username" type="username"></input>
                        <input onChange={e => setBio(e.target.value)} placeholder="Bio" type="text"></input>
                        <input onChange={e => setTwitter(e.target.value)} placeholder="Twitter" type="text"></input>
                        <input onChange={e => setDiscord(e.target.value)} placeholder="Discord" type="text"></input>
                        <input onChange={e => setLocation(e.target.value)} placeholder="Location" type="text"></input>
                        <button type="submit" disabled={(username || bio || twitter || discord || location || image ? false : true)}>Save</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default ProfileUpdate
