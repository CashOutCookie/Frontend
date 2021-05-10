import React from 'react'
import { Redirect } from 'react-router-dom'

const Logout = () => {
    localStorage.removeItem('token')
    return <Redirect to="/login" />
}

const CheckLogin = () => {
    return localStorage.getItem('token')
}

const RedirectIfNotLoggedIn = () => {
    let ifLoggedIn = localStorage.getItem('token')
    if (ifLoggedIn) {
        return <></>
    }
    else {
        return <Redirect to="/login" />
    }
}

export {Logout, CheckLogin, RedirectIfNotLoggedIn}