import React, { useState } from 'react'
import { Logout } from '../Components/CheckLogin'

const LogoutPage = () => {
    const [clicked, setClicked] = useState(false)
    if (clicked) {
        return <Logout />
    } else {
        return(
            <>
                <p className="logout-text">Are you sure you wanna log out?</p>
                <button onClick={() => {
                    setClicked(true)
                }} className="logout-button">Yes</button>
            </>
        )
    }
}

export { LogoutPage }