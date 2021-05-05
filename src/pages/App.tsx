import React, { useState } from 'react'
import '../scss/default.scss'
import Navbar from './Components/Navbar'
import SidebarIcons from './Components/SidebarIcons'
import Content from './AppContent/Content'
import Dashboard from './AppContent/Dashboard'



function App() {

    const [currentPage, setCurrentPage] = useState('Dashboard')
    const [pageContent, setPageContent] = useState(Dashboard)

    function onPageChange(pageName, pageContent) {
        setCurrentPage(pageName)
        setPageContent(pageContent)
    }

    return(
        <div>
            <Navbar />
            

            <div className="app-body">


                <div className="sidebar">
                    <SidebarIcons onChange={onPageChange} />
                </div>

            <Content heading={currentPage} actual={pageContent} />

            {/* Add the main content here */}


            </div>
        </div>
    )
}

export { App }
