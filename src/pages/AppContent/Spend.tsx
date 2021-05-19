import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { RedirectIfNotLoggedIn } from '../Components/CheckLogin'
import Animation from '../Components/Animations'
import gamble from '../../animations/gamble.json'
import lottery from '../../animations/lottery.json'
import Navbar from '../Components/Navbar'
import SidebarIcons from '../Components/SidebarIcons'
import Heading from './Heading'
import Content from '../Content'
import '../../scss/games.scss'


const SpendContent = () => {
    let history = useHistory()
    return(
        <>
        <div className="games-parent">
            <div className="games">
                <div className="first-item">
                    <div onClick={() => window.location.href = '/lottery'} className="game-item">
                        <Animation json={lottery} height='20vw' width='20vw' />
                    </div>
                    <p className="gameName">Lottery</p>
                </div>
                <div className="second-item">
                    <div onClick={() => history.push('/gamble')} className="game-item">
                        <Animation json={gamble} height='16vw' width='16vw' />
                    </div>
                    <p className="gameName">Gamble</p>
                </div>
            </div>
        </div>
        </>
    )
}

const Spend = () => {

    const [currentPage, setCurrentPage] = useState('Spend')

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

export { Spend, SpendContent }