import React, { useState, useEffect } from 'react'
import { RedirectIfNotLoggedIn } from '../Components/CheckLogin'
import { Logout } from '../Components/CheckLogin'
import Navbar from '../Components/Navbar'
import SidebarIcons from '../Components/SidebarIcons'
import Heading from './Heading'
import Content from '../Content'

const BankContent = () => {

    const [balance, setBalance] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [amount, setAmount] = useState('')
    const [message, setMessage] = useState('Transaction history and deposits coming soon...')
    const [loading, setLoading] = useState(true)
    const [wasError, setWasError] = useState(false)

    useEffect(() => {
        fetch('https://api.cashoutcookie.com/whoami/', {
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
        fetch('https://api.cashoutcookie.com/transfer/', {
            method: 'POST',
            headers: {
                'Authorization': `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to_user: accountNumber,
                amount: amount,
                description: 'Transfer'
            })
        })
        .then(res => res.json())
        .then(json => {
            setMessage(json)
            setBalance((Number(balance) - Number(amount)).toString())
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
                    <div className="transfer-box">
                        <p>Transfer</p>
                        <form onSubmit={handleSubmit}>
                            <input required placeholder="Account Number" onChange={e => setAccountNumber(e.target.value)}></input>
                            <input required placeholder="Amount" onChange={e => setAmount(e.target.value)}></input>
                            <button type="submit">Transfer</button>
                        </form>
                    </div>
                        <p className="transferMessage">{message}</p>
                    {/* <Animation json={piggy} width='calc(40px + 10vw)' height='calc(40px + 10vw)' /> */}
                </div>
            </>
        )
    }
}

const Bank = () => {

    const [currentPage, setCurrentPage] = useState('Bank')

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

export { Bank, BankContent }