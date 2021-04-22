import React from 'react'
import '../scss/default.scss'
import Navbar from './Components/Navbar'

function Dashboard() {
    return(
        <div>
            <Navbar />
            <div className="dash-body">
                <div className="sidebar">

                </div>
                <div className="dash-content">
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard
