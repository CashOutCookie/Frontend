import React, { useState, useEffect } from 'react'
import { RedirectIfNotLoggedIn } from '../Components/CheckLogin'
import { Logout } from '../Components/CheckLogin'
import Navbar from '../Components/Navbar'
import SidebarIcons from '../Components/SidebarIcons'
import Heading from './Heading'
import Content from '../Content'

const GambleContent = () => {

    const [balance, setBalance] = useState('')
    const [amount, setAmount] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)
    const [wasError, setWasError] = useState(false)

    useEffect(() => {
        fetch('https://heroku-moment.herokuapp.com/whoami/', {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            if (json.detail === 'Error decoding signature.') {
                console.log(json)
                localStorage.removeItem('token')
                setWasError(true)
            } else {
                setBalance(json.balance)
                setLoading(false)
                console.log(json)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://heroku-moment.herokuapp.com/gamble/', {
            method: 'POST',
            headers: {
                'Authorization': `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: amount,
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setMessage(json.message)
            if (json.newBalance) {
                setBalance(json.newBalance)
            }
        })
    }

    if (wasError) {
        return <Logout />
    } else if (loading) {
        return <></>
    } else {
        return(
            <>
                <div className="bank-content">
                    <p className="bankBalance">Your current balance is {balance}</p>
                    <div className="transfer-box gamble">
                        <p>GambleBox</p>
                        <form onSubmit={handleSubmit}>
                            <input type="number" required placeholder="Amount" onChange={e => setAmount(e.target.value)}></input>
                            <button type="submit">Try your luck</button>
                        </form>
                    </div>
                        <p className="transferMessage">{message}</p>
                    {/* <Animation json={piggy} width='calc(40px + 10vw)' height='calc(40px + 10vw)' /> */}
                </div>
            </>
        )
    }
}

const Gamble = () => {

    const [currentPage, setCurrentPage] = useState('Gamble')

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

export { Gamble, GambleContent }