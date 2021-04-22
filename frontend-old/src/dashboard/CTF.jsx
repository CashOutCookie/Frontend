import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar'
import Animation from '../animations/Animations'
import ctfAnimation from '../animations/json/ctf.json'
import loadingJson from '../animations/json/loading.json'

let fullUrl = window.location.pathname

let ctfUrl = fullUrl.substr(5)

console.log("Flag: 2OA2uBoIqsVJgN9f")

const Info = props => {
    const [loading, setLoading] = useState(true)
    const [flagData, setFlagData] = useState()
    const [flag, setFlag] = useState()

    useEffect(() => {
        fetch(process.env.REACT_APP_API_BASE_URL + `/api/flagsget/${ctfUrl}?format=json`, {
            method: 'GET',
            headers: {
                'Authorization': 'JWT ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(json => {
            setFlagData(json)
            setLoading(false)
        })
    }, [])

    const submit = e => {
        e.preventDefault()
        console.log(flag)
        fetch(process.env.REACT_APP_API_BASE_URL + `/api/flagscheck/`, {
          method: 'POST',
          body: JSON.stringify({ flag }),
          headers: { 
            'Authorization': 'JWT ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
    }

    if (fullUrl === '/ctf' || fullUrl === '/ctf/') {
        return(
                <div className="ctf-text">
                    <h1>How does it work?</h1>
                    <p>Capture the flag is a treasure hunt game to hunt for alphanumeric characters referred to as Flags [Example: "2Oh24BoIdssndN9f"] each of 16 characters by decrypting stuff. Submitting each flag will gain you really good amount of cookies depending on the hardness of the level you're on. Do save the URL once you've started the game to make sure that you don't lose your progress, contact <a href="https://discord.gg/Qh53xzgZqA" rel="noopener noreferrer" target="_blank">support</a> if you do lose your URL or for any other queries.</p>
                    <a href="/ctf/firstFlag"><button className="first-flag">First Challenge</button></a>
                </div>
        )
    } else {
        if (loading) {
            return(
                <div>
                    <Animation name={loadingJson} size={500} />
                </div>
            )
        } else {
            return(
                <div className="flag-details">
                    <h1>{flagData.instructions}</h1>
                    {console.log(flagData.additional)}
                    {/* <p>{flagData.additional}</p> */}
                    <img className="flag-image" alt="" src={flagData.image} />
                    <h1 className="submit-header-ctf">Submit Flag</h1>
                    <form onSubmit={submit}>
                        <input placeholder="Flag" onChange={e => setFlag(e.target.value)}></input>
                    </form>
                </div>
            )
        }
    }
}

function CTF() {
    return(
        <div>
            <Navbar name="CTF" />
            <div className="ctf-flex">
                <Animation name={ctfAnimation} size={500} />
                <Info />
            </div>
        </div>
    )
}

export default CTF;