import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Animation from '../Components/Animations'
import quiz from '../../animations/quiz.json'
import flag from '../../animations/flag.json'
import Navbar from '../Components/Navbar'
import SidebarIcons from '../Components/SidebarIcons'
import Heading from './Heading'
import Content from '../Content'
import '../../scss/games.scss'


const WorkContent = () => {
    let history = useHistory()
    return(
        <>
        <div className="games-parent">
            <div className="games">
                <div className="first-item">
                    <div onClick={() => window.location.href = '/quiz'} className="game-item">
                        <Animation json={quiz} height='16vw' width='16vw' />
                    </div>
                    <p className="gameName">Quiz</p>
                </div>
                <div className="second-item">
                    <div onClick={() => history.push('/ctf')} className="game-item">
                        <Animation json={flag} height='16vw' width='16vw' />
                    </div>
                    <p className="gameName">Capture The Flag</p>
                </div>
            </div>
        </div>
        </>
    )
}

const Work = () => {

    const [currentPage, setCurrentPage] = useState('Work')

    function onPageChange(pageName) {
        setCurrentPage(pageName)
    }

    return(
        <>
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

export { Work, WorkContent }