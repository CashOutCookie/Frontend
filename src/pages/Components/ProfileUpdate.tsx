import React, { useState } from 'react';
import '../../scss/profileupdate.scss'
import uploadimage from '../../images/upload-image.svg';


const ProfileInputs = ({ profileData }) => {

    const handleclose = () => {
        profileData.setModalIsOpen(false)
    }

    const handleImageSubmit = () => {
        const formData = new FormData()
        formData.append('image', file)
        fetch('https://api.cashoutcookie.com/profileupdate/', {
            method: 'PATCH',
            headers: {
                // 'Content-Type': image ? 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' : 'application/json',
                'Authorization': `JWT ${localStorage.getItem('token')}`
            },
            body: formData
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                if (json.token) {
                    localStorage.setItem('token', json.token)
                }
                handleclose()
                setTimeout(() => profileData.changeLoading(false), 1000)
            })
            .catch((err) => {
                console.log(err)
                profileData.changeMessage(err[0])
            })
    }

    const [username, setUsername] = useState('')
    const [image, setImage] = useState('')
    const [bio, setBio] = useState('')
    const [twitter, setTwitter] = useState('')
    const [discord, setDiscord] = useState('')
    const [location, setLocation] = useState('')
    const [file, setFile] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        handleclose()
        profileData.changeLoading(true)
        console.log(username)
        console.log(image)
        const changedData = {
            username: username ? username : profileData.data.username,
            bio: bio ? bio : profileData.data.bio,
            twitter: twitter ? twitter : profileData.data.twitterusername,
            discord: discord ? discord : profileData.data.discord,
            location: location ? location : profileData.data.location,
        }
        
        fetch('https://api.cashoutcookie.com/profileupdate/', {
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
                if (json.token) {
                    localStorage.setItem('token', json.token)
                }
                setTimeout(() => profileData.changeLoading(false), 1000)
            })
            .catch((err) => {
                console.log(err)
                profileData.changeMessage(err[0])
            })
        }
        return(
            <form onSubmit={handleSubmit}>
                        <h1>Profile Update</h1>
                        <div className="profileupdate-allitemsparent">
                            <div className="profileupdate-inputarea">
                                <p>Username</p>
                                <input maxLength={12} onChange={(e) => setUsername(e.target.value)} placeholder={profileData.data.username} type="text"></input>
                                <p>Bio</p>
                                <textarea maxLength={150} onChange={(e) => setBio(e.target.value)} placeholder={profileData.data.bio}></textarea>
                                <p>Twitter</p>
                                <input maxLength={15} onChange={(e) => setTwitter(e.target.value)} placeholder={profileData.data.twitterusername} type="text"></input>
                                <p>Discord</p>
                                <input maxLength={30} onChange={(e) => setDiscord(e.target.value)} placeholder={profileData.data.discord} type="text"></input>
                                <p>Location</p>
                                <input maxLength={70} onChange={(e) => setLocation(e.target.value)} placeholder={profileData.data.location} type="text"></input>
                            </div>
                            <form>
                                <div className="profileupdate-imagesection">
                                    <img alt="" src={image || profileData.data.image} />
                                    <input accept="image/png, image/gif, image/jpeg" onChange={(e) => {
                                        setFile(e.target.files[0])
                                        console.log(file)
                                        setImage(URL.createObjectURL(e.target.files[0]))
                                    }} id="profileupdate-hiddeninput" type="file" />
                                    <label htmlFor="profileupdate-hiddeninput"><img alt="" src={uploadimage} /></label>
                                </div>
                            </form>
                        </div>
                        <button onClick={() => {
                            if (image) {
                                handleImageSubmit()
                            } else {
                                return
                            }
                        }} type="submit" disabled={(username || bio || twitter || discord || location || image ? false : true)}>Save</button>
                    </form>
            
        )
}


function ProfileUpdate(props) {
    const handleclose = () => {
        props.setModalIsOpen(false)
    }
    return (
        <>
            <div className="profileupdate-main">
                <div className="profileupdate-box">
                    <span className="profileupdate-close" onClick={handleclose}>&times;</span>
                    <ProfileInputs profileData={props} />
                </div>
            </div>
        </>
    )
}

export default ProfileUpdate
