import React, { useState } from 'react'
import '../scss/default.scss'
import Navbar from './Components/Navbar'
import SidebarIcons from './Components/SidebarIcons'
import Content from './AppContent/Content'

let pageName = 'Dashboard'

function changePageName(page) {
    pageName = page
}

function App() {

    return(
        <div>
            <Navbar />
            
            {console.log(pageName)}

            <div className="app-body">


                <div className="sidebar">
                    <SidebarIcons />
                </div>

                <Content heading={pageName} />

            {/* Add the main content here */}


            </div>
        </div>
    )
}

export { App, changePageName }
