import React, { useState } from 'react';
import '../../scss/profileupdate.scss'
import uploadimage from '../../images/upload-image.svg';

function ProfileUpdate(props) {

    const [username, setUsername] = useState('Bolt')
    const [image, setImage] = useState('https://cdn.discordapp.com/attachments/807140294764003350/840979249472733254/cat.png')
    const [bio, setBio] = useState('hey')
    const [twitter, setTwitter] = useState('twitter.com/ElonBolt')
    const [discord, setDiscord] = useState('Bolt#8905')
    const [location, setLocation] = useState('India')

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
                        <div className="profileupdate-allitemsparent">
                            <div className="profileupdate-inputarea">
                                <p>Username</p>
                                <input onChange={e => setUsername(e.target.value)} placeholder="Username" type="username" value={username}></input>
                                <p>Bio</p>
                                <textarea onChange={e => setBio(e.target.value)} placeholder="Bio" value={bio}></textarea>
                                <p>Twitter</p>
                                <input onChange={e => setTwitter(e.target.value)} placeholder="Twitter" type="text" value={twitter}></input>
                                <p>Discord</p>
                                <input onChange={e => setDiscord(e.target.value)} placeholder="Discord" type="text" value={discord}></input>
                                <p>Location</p>
                                <input onChange={e => setLocation(e.target.value)} placeholder="Location" type="text" value={location}></input>
                            </div>
                            <div className="profileupdate-imagesection">
                                <img src={image} />
                                <input id="profileupdate-hiddeninput" type="file" />
                                <label htmlFor="profileupdate-hiddeninput"><img src={uploadimage} /></label>
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
