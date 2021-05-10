import React, { useState } from 'react'
import { RedirectIfNotLoggedIn } from './Components/CheckLogin'
import '../scss/default.scss'
import Navbar from './Components/Navbar'
import SidebarIcons from './Components/SidebarIcons'
import Heading from './AppContent/Heading'
import Content from './Content'

function App() {

    const [currentPage, setCurrentPage] = useState('Dashboard')

    function onPageChange(pageName) {
        setCurrentPage(pageName)
    }

    return(
        <div>
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
        </div>
    )
}

export { App }
