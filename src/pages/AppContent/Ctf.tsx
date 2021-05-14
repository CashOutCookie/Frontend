import React, { useState, useEffect } from 'react';
import { RedirectIfNotLoggedIn } from '../Components/CheckLogin'
import Navbar from '../Components/Navbar'
import SidebarIcons from '../Components/SidebarIcons'
import Heading from './Heading'
import Content from '../Content'
import Animation from '../Components/Animations'
import '../../scss/ctf.scss'
import Loading from '../../animations/loading.json'


const CtfContent = () => {
    const [fetched, setFetched] = useState(false)
    const [currentFlag, setCurrentFlag] = useState('')
    const [flag, setFlag] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(flag)
        setFetched(false)
        fetch('http://localhost:8000/flagscheck/', {
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
        .then(json => console.log(json))
    }

    useEffect(() => {
        fetch('http://localhost:8000/flagsget', {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setCurrentFlag(json)
            setFetched(true)
        })
    }, [setCurrentFlag])

    if (fetched) {
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
                    <input required className="flag-input" placeholder="Your Flag Here" onChange={e => setFlag(e.target.value)}></input>
                    <button type="submit">Submit</button>
                </form>

            </div>
            </>
        )
    } else if (!fetched) {
        return(
            <>
                <div style={{ display: 'flex', alignItems: 'flex-start'}}>
                    <Animation json={Loading} height="calc(150px + 10vw)" width="calc(150px + 10vw)" />
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