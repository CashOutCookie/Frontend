import React from 'react'
import '../scss/default.scss'
import Navbar from './Components/Navbar'
import SidebarIcons from './Components/SidebarIcons'

function Dashboard() {
    return(
        <div>
            <Navbar />
            <div className="dash-body">

                <div className="sidebar">
                    <SidebarIcons />
                </div>
                
                <div className="dash-content">
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard
