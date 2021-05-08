import React, { useState, useEffect } from 'react'
import { decode } from 'html-entities';
import Navbar from '../Components/Navbar'
import SidebarIcons from '../Components/SidebarIcons'
import Heading from './Heading'
import Content from '../Content'
import '../../scss/default.scss'
import '../../scss/quiz.scss'

const QuizContent = () => {

    const [question, setQuestion] = useState('')
    const [didAnswer, setDidAnswer] = useState(false)
    const [options, setOptions] = useState('')
    const [timer, setTimer] = useState(15)

    

    useEffect(() => {
        const socket = new WebSocket(`ws://localhost:8000/quiz/?token=${localStorage.getItem('token')}`)
        socket.onmessage = (event) => {
            let data = JSON.parse(event.data)
            console.log(data);
            if (data.question) {
                setQuestion(data.question)
                // setOptions(data.options)
            } else if (data.timer) {
                setTimer((15 - Number(data.timer)) * 100)
            }
        }
    }, [setQuestion, setOptions, setTimer, timer])

    return(
        <div>
            <h1 className="question">{decode(question)}</h1>
            <div className="timer">
                <div className="slider" style={{
                    width: `${timer}%`
                }}></div>
            </div>
            {/* {options.forEach(option => {
               <div className="options"></div> 
            })} */}
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
