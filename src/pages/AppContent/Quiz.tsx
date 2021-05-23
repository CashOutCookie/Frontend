import React, { useState, useEffect } from 'react'
import { RedirectIfNotLoggedIn } from '../Components/CheckLogin'
import { useStopwatch } from 'react-timer-hook';
import Countdown from 'react-countdown';
import { decode } from 'html-entities';
import Navbar from '../Components/Navbar'
import SidebarIcons from '../Components/SidebarIcons'
import Heading from './Heading'
import Content from '../Content'
import Animation from '../Components/Animations'
import Loading from '../../animations/loading.json'
import '../../scss/default.scss'
import '../../scss/quiz.scss'

const socket = new WebSocket(`wss://api.cashoutcookie.com/quiz/`)

const QuizContent = () => {

    const [loading, setLoading] = useState(true)
    const [throttled, setThrottled] = useState(0)
    const [question, setQuestion] = useState('')
    const [options, setOptions] = useState()
    const [message, setMessage] = useState('')
    const [cookies, setCookies] = useState('')
    const [done, setDone] = useState(false)
    const { seconds, start, reset, pause } = useStopwatch({ autoStart: false })

    console.log(seconds)

    const sendAnswer = (answer) => {
        socket.send(JSON.stringify({
            "type": "quiz",
            "answer": answer
        }))
        setLoading(true)
    }

    useEffect(() => {
        if (seconds === 10) {
            sendAnswer('')
            pause()
        }
    }, [seconds, pause])

    socket.onopen = () => {
        socket.send(JSON.stringify({ 
            "type": "auth",
            "jwt": localStorage.getItem('token') 
        }))
    }
    socket.onmessage = (event) => {
        let data = JSON.parse(event.data)
        console.log(data);
        if (data.question) {
            setQuestion(data.question)
            setOptions(data.options)
            setLoading(false)
            reset()
            start()
        } else if (data.throttle) {
            console.log('Throttled')
            setThrottled(data.throttle)
            setLoading(false)
        } else if (data.message) {
            fetch('https://api.cashoutcookie.com/quizreward/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    balance: data.earned.split('earned ')[1]
                })
            })
            .then(res => res.json())
            .then(json => {
                setMessage(data.message)
                setCookies(data.earned)
                setDone(true)
                setLoading(false)
                console.log(json)
            })
            .catch((err) => {
                console.log(err)
                setMessage('There was an error, please try quiz again later')
            })
        }
    }

    const OptionElement = () => {
        if (!loading) {
            return(
                <>
                    {// @ts-ignore
                    options.map(option => (
                        <div key={option} onClick={() => {
                            pause()
                            sendAnswer(option)
                        }} className="options">
                            <p key={decode(option)}>{
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

        


    if (throttled === 0 && !loading && !done) {
        return(
            <div>
                <h1 className="question">{decode(question)}</h1>
                <div className="timer">
                    <div className="slider" style={{
                        width: `${((10 - seconds) /10) * 100}%`
                    }}></div>
                </div>
                <OptionElement />
            </div>
        )
    } else if (message) {
        return(
            <>
                <div className="throttle">
                    <p>{message}</p>
                    <p>{cookies ? cookies : ''}</p>
                </div>
            </>
        )
    } else if (loading) {
        return(
            <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: "calc(40px + 2.2vw)", marginTop: "50px"}}>
                <Animation json={Loading} height="calc(18px + 8vw)" width="calc(18px + 8vw)" />
            </div>
        )
    } else {
        let secondsLeft = Number(throttled) * 1000
        return (
            <>
                <div className="throttle">
                    <p>You've already played quiz in the last 12 hours</p>
                    <p>You can play again in: <Countdown date={Date.now() + secondsLeft} precision={0} /></p> 
                </div>
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

export { Quiz, QuizContent }
