import React, { useState, useEffect } from 'react';
import { RedirectIfNotLoggedIn } from '../Components/CheckLogin'
import Navbar from '../Components/Navbar'
import SidebarIcons from '../Components/SidebarIcons'
import Heading from './Heading'
import Content from '../Content'


const Ctf = () => {

    const [currentPage, setCurrentPage] = useState('CTF')
    const [currentFlag, setCurrentFlag] = useState('')
    const [loading, setLoading] = useState(true)


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
        })
    }, [])

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

export { Ctf }