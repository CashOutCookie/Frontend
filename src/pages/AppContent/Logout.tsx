import React from 'react'
import { Logout } from '../Components/CheckLogin'

const LogoutPage = () => {
    return(
        <>
            <p className="logout-text">Are you sure you wanna log out?</p>
            <button onClick={() => {
                    <Logout />
            }}>Yes</button>
        </>
    )
}

export { LogoutPage }