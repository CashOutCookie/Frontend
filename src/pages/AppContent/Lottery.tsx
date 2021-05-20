import React, { useState, useEffect } from 'react'
import { RedirectIfNotLoggedIn, Logout } from '../Components/CheckLogin'
import { LoadingAnimation } from '../Components/Loading'
import Navbar from '../Components/Navbar'
import SidebarIcons from '../Components/SidebarIcons'
import Heading from './Heading'
import Content from '../Content'
import '../../scss/games.scss'

const LotteryContent = () => {
    const [loading, setLoading] = useState(true)
    const [wasError, setWasError] = useState(false)
    const [data, setData] = useState()
    const [ticket, setTicket] = useState('')

    useEffect(() => {
        fetch('https://heroku-moment.herokuapp.com/myticket', {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if (json.detail === 'Error decoding signature.') {
                setWasError(true)
            } else if (json.detail === 'Invalid signature.') {
                setWasError(true)
            } else if (typeof json.image === 'string') {
                setTicket(json.image)
                setLoading(false)
            } else if (json.image.error === 'You don not have any ticket.') {
                fetch('https://heroku-moment.herokuapp.com/ticketsget', {
                    method: 'GET',
                    headers: {
                        'Authorization': `JWT ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    setData(json)
                    setLoading(false)
                })
            }
        })
        .catch(err => console.log(err))
    }, [])

    const buyTicket = (ticketNumber) => {
        fetch(`https://heroku-moment.herokuapp.com/buyticket/`, {
            method: 'POST',
            headers: {
                'Authorization': `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: ticketNumber
            })
        })
        .then(res => res.json())
        .then(json => {
            setLoading(false)
            window.location.href = '/lottery'
            console.log(json)
        })
        .catch(err => console.log(err))
    }

    if (loading) {
        return <LoadingAnimation />
    } else if (wasError) {
        return <Logout />
    } else {
        let tickets
        if (data) {
            // @ts-ignore
            tickets = data.map(ticket => <button key={ticket.code} onClick={() => {
                setLoading(true)
                buyTicket(ticket.code)
            }} disabled={ticket.is_taken}>{ticket.code}</button>)
        }
        return(
            <div className="lottery-content">
                <p>{ticket ? 'Your ticket' : 'Available tickets (Price: 100 Cookies)'}</p>
                <img alt="" src={ticket}></img>
                <div className="ticket-buttons">
                    {tickets}
                </div>
            </div>
        )
    }
}


const Lottery = () => {
    const [currentPage, setCurrentPage] = useState('Lottery')

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


export { Lottery, LotteryContent }