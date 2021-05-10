import React, { useState, useEffect } from 'react';
import { RedirectIfNotLoggedIn } from '../Components/CheckLogin'
import Navbar from '../Components/Navbar'
import SidebarIcons from '../Components/SidebarIcons'
import Heading from './Heading'
import Content from '../Content'
import '../../scss/ctf.scss'

const CtfContent = () => {
    const [fetched, setFetched] = useState(false)
    const [currentFlag, setCurrentFlag] = useState()
    const [loading, setLoading] = useState(true)
    const [flag, setFlag] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
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
                <p>{
                // @ts-ignore
                currentFlag.instructions
                }</p>
                <input placeholder="Your Flag Here"></input>
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