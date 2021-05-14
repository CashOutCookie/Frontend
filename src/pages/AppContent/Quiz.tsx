import React, { useState, useEffect } from 'react'
import { decode } from 'html-entities';
import Navbar from '../Components/Navbar'
import SidebarIcons from '../Components/SidebarIcons'
import Heading from './Heading'
import Content from '../Content'
import '../../scss/default.scss'
import '../../scss/quiz.scss'

const QuizContent = () => {

    const [questionNumber, setQuestionNumber] = useState(0)
    const [throttled, setThrottled] = useState(0)
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [options, setOptions] = useState()
    const [timer, setTimer] = useState(15)

    const OptionElement = () => {
        if (questionNumber !== 0) {
            return(
                <>
                    {// @ts-ignore
                    options.map(option => (
                        <div onClick={() => {
                            setAnswer(option)
                        }} className="options">
                            <p>{
                            // @ts-ignore
                                option
                            }</p>
                        </div>
                    ))}
                </>
            )
        } else {
            return <></>
        }
    }

    useEffect(() => {
        const socket = new WebSocket(`ws://localhost:8000/quiz/`)
        socket.onopen = () => {
            socket.send(JSON.stringify({ 
                "type": "auth",
                "jwt": localStorage.getItem('token') 
            }))
            if (answer) {
                socket.send(JSON.stringify({
                    "type": "quiz",
                    "answer": answer
                }))
                setAnswer('')
            }
        }
        socket.onmessage = (event) => {
            let data = JSON.parse(event.data)
            console.log(data);
            if (data.question) {
                setQuestion(data.question)
                setOptions(data.options)
                setQuestionNumber(questionNumber + 1)
            } else if (data.throttle) {
                console.log('Throttled')
                setThrottled(data.throttle)
            }
        }
    }, [setQuestion, setOptions, setAnswer, questionNumber, answer, ])


    if (throttled === 0) {
        return(
            <div>
                <h1 className="question">{`${questionNumber}.`} {decode(question)}</h1>
                <div className="timer">
                    <div className="slider" style={{
                        width: `${(timer/15) * 100}%`
                    }}></div>
                </div>
                <OptionElement />
            </div>
        )
    } else {
        return (
            <>
                <p>{throttled}</p>
            </>
        )
    }
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
