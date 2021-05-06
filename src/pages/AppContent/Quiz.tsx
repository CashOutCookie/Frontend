import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import SidebarIcons from '../Components/SidebarIcons'
import Heading from './Heading'
import Content from '../Content'
import '../../scss/default.scss'
import '../../scss/quiz.scss'

const QuizContent = () => {

    const [question, setQuestion] = useState('')

    useEffect(() => {
        let socket = new WebSocket(`ws://localhost:8000/quiz/?token=asdasd`)
        socket.onmessage = (event) => {
            let data = JSON.parse(event.data)
            console.log(data);
            if (data.question) {
                setQuestion(data.question)
            }
        }
    }, [setQuestion])

    return(
        <div>
            <h1 className="question">{question}</h1>
            <div className="timer">
                <div className="slider"></div>
            </div>
        </div>
    )
}

function Quiz() {

    const [currentPage, setCurrentPage] = useState('Quiz')

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

export { Quiz, QuizContent }
