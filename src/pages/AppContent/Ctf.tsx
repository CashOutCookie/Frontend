import React, { useState, useEffect } from 'react';
import { RedirectIfNotLoggedIn } from '../Components/CheckLogin'
import Navbar from '../Components/Navbar'
import SidebarIcons from '../Components/SidebarIcons'
import Heading from './Heading'
import Content from '../Content'
import Animation from '../Components/Animations'
import '../../scss/ctf.scss'
import Loading from '../../animations/loading.json'

localStorage.setItem('muchWow', '8ZCRn6UAWLiOZw0N')

const CtfContent = () => {
    const [fetched, setFetched] = useState(false)
    const [currentFlag, setCurrentFlag] = useState('')
    const [flag, setFlag] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(flag)
        setFetched(false)
        fetch('https://api.cashoutcookie.com/flagscheck/', {
            method: 'POST',
            headers: {
                'Authorization': `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                flag
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setMessage(json)
            setFetched(true)
        })
    }

    useEffect(() => {
        fetch('https://api.cashoutcookie.com/flagsget', {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log(fetched)
            setCurrentFlag(json)
            setFetched(true)
        })
    }, [fetched])

    if (fetched) {
        console.log('https://discord.gg/KSmvMPCBeS')
        console.log('https://youtu.be/oHg5SJYRHA0')
        console.log(`Your first flag: 2OA2uBoIqsVJgN9f`)
        return(
            <>
            <div className="ctf-content">
                <p className="ctf-instructions">{
                    // @ts-ignore
                    currentFlag.instructions
                }</p>
                <p className="ctf-additional">{
                    // @ts-ignore
                    currentFlag.additional
                }</p>
                <img className="ctf-image" alt="" src={
                    // @ts-ignore
                    currentFlag.image
                }></img>

                <form onSubmit={handleSubmit}>
                    <input disabled={
                        // @ts-ignore
                        currentFlag.additional.includes('finding') ? true : false
                    } required className="flag-input" placeholder="Your Flag Here" onChange={e => setFlag(e.target.value)}></input>
                    <button disabled={
                        // @ts-ignore
                        currentFlag.additional.includes('finding') ? true : false
                    } className="flag-submit" type="submit">Submit</button>
                </form>
                <p>{message}</p>
                <p style={{ display: 'none' }}>TBhxquXNInkFxk56</p>
            </div>
            </>
        )
    } else if (!fetched) {
        return(
            <>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: "calc(40px + 2.2vw)", marginTop: "50px"}}>
                    <Animation json={Loading} height="calc(18px + 8vw)" width="calc(18px + 8vw)" />
                </div>
            </>
        )
    } else {
        return(
            <></>
        )
    }
}


const Ctf = () => {

    const [currentPage, setCurrentPage] = useState('CTF')
    function onPageChange(pageName) {
        setCurrentPage(pageName)
    }

    return(
        <>
        <RedirectIfNotLoggedIn />
        <Navbar />
            <div className="app-body">
                <div className="sidebar">
                        <SidebarIcons onChange={onPageChange} />
                </div>

                <div className="app-content">
                    <Heading heading={currentPage} />
                    <Content pageName={currentPage} />
                </div>

            </div>
        </>
    )
}

export { CtfContent, Ctf }