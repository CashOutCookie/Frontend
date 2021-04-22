import React, { useState, useEffect, useRef } from 'react'
import '../css/Dash.css'
import { Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar'
import parse from 'html-react-parser'
import loadingJson from '../animations/json/loading.json'
import Animation from '../animations/Animations'
import cookieAnimation from "../animations/json/cookie-animation.json";
let hours
let ifAllowed = true
let userData = {
    answers: [],
    timeTaken: [],
    "typeOfQuestions": "allQuestions"
}
function fetchData(type) {
    return fetch(process.env.REACT_APP_API_BASE_URL + `/api/questionlist/${type}/15/?format=json`, {
        method: 'GET',
        headers: {
            'Authorization': 'JWT ' + localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(res => {
            if (!res.ok) throw res;
            return res.json()
        })
        .catch((error) => {
            return error.json()
        });
}
function Quiz() {
    const [data, setData] = useState([])
    const [number, setNumber] = useState(0)
    const [loading, setLoading] = useState(true)
    const [timeTaken, setTimeTaken] = useState(1)
    const [postedData, setPostedData] = useState([])
    const [fetched, setFetched] = useState(false)
    let ref = useRef()
    useEffect(() => {            
        let categories = ['allQuestions']                        
        for (const x of categories) {
            fetchData(x)
                .then(json => {
                    var details = JSON.stringify(json)
                    if (details.includes("question")) {
                        setData(d => [...d, ...json])
                    } else if (details.includes("throttled")) {
                        var arr = details.split(" ");
                        hours = 12 - parseInt(arr[6])/3600;
                        
                        hours >= 12 ? ifAllowed = true : ifAllowed = false;  
                    }
                })
        }
            
        setLoading(false)
    }, [])
    useEffect(() => {
        if (timeTaken <= 10 && !fetched && ifAllowed) {
            clearInterval(ref.current)
            ref.current = setInterval(() => {
                setTimeTaken(timeTaken + 1)
                console.log(timeTaken)
            }, 1000)
        } else if (timeTaken > 10 && !fetched) {
            setTimeTaken(0)
            PostAnswer()
        }
    }, [timeTaken, PostAnswer, fetched])
    const styles = {
        containerStyle: {
            maxWidth: `${100 - timeTaken * 10}%`
        }
    };
    const { containerStyle } = styles;
    const question = data[number]?.question
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function PostAnswer(answerSelected) {
        userData.answers.push({
            "id": data?.[number].id,
            "answer": String(data?.[number].options[answerSelected])
        })
        userData.timeTaken.push({
            "id": data?.[number].id,
            "time": timeTaken
        })
        if (number < 14) {
            setNumber(number + 1)
            setTimeTaken(0)
        } else if (number === 14) {
            setLoading(true)
            console.log(userData)
            fetch(process.env.REACT_APP_API_BASE_URL + '/api/checkanswers/', {
                method: 'POST',
                headers: {
                    'Authorization': 'JWT ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData),
            })
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    let categories = ['allQuestions']                        
                    for (const x of categories) {
                        fetchData(x)
                            .then(json => {
                                var details = JSON.stringify(json)
                                if (details.includes("question")) {
                                    setData(d => [...d, ...json])
                                    hours = 0
                                } else if (details.includes("throttled")) {
                                    var arr = details.split(" ");
                                    hours = 12 - parseInt(arr[6])/3600;
                                    
                                    hours >= 12 ? ifAllowed = true : ifAllowed = false;  
                                }
                            })
                    }
                    setPostedData(json)
                    setLoading(false)
                    setFetched(true)
                })
        }
    }
    let loggedIn = localStorage.getItem('username') ? true : false;
    if (!loading && !fetched && ifAllowed) {    
        return (        
            <div>
                {loggedIn ? '' : <Redirect to="/login" />}
                <Navbar name="Quiz" />
                <div className="questionNumber-div">
                    <p className="questionNumber">{'Question '}{number + 1}{' / 15'}</p>
                </div>
                <div className="quiz-box">
                    <div className="time-left" style={containerStyle} />
                    <p className="question">{parse(`${question}`)}</p>
                    <button className="quiz-options" id="option-zero" onClick={() => PostAnswer(0)}>{parse(`${data[number]?.options[0]}`)}</button>
                    <button className="quiz-options" onClick={() => PostAnswer(1)}>{parse(`${data[number]?.options[1]}`)}</button>
                    <button className="quiz-options" onClick={() => PostAnswer(2)}>{parse(`${data[number]?.options[2]}`)}</button>
                </div>
            </div>
        )
    } else if (loading) {
        return (
            <div>
                {loggedIn ? '' : <Redirect to="/login" />}
                <Navbar name="Quiz" />
                <Animation name={loadingJson} size={400} />
            </div>
        )
    } else if (!loading && fetched) {
        return (
            <div>
                {loggedIn ? '' : <Redirect to="/login" />}
                <Navbar name="Quiz" />
                <Animation name={cookieAnimation} size={300} />
                <h1 className="afterQuiz-heading">{'You answered '}{postedData["Number Correct"]}{' questions correctly out of 15 and earned '}{Math.round(Number(postedData["New Balance"])) - Math.round(Number(postedData["Previous Balance"]))}{' Cookies!'}</h1>
            </div>
        )
    } else {
        return (
            <div>
                {loggedIn ? '' : <Redirect to="/login" />}
                <Navbar name="Quiz" />
                <Animation name={cookieAnimation} size={300} />
                <h1 className="afterQuiz-heading">{'Sorry, you have already played quiz once in the last 12 hours, Please try again after: '}{(12 - (hours).toFixed(1))}{' hours'}</h1>
            </div>
        )
    }
}
export default Quiz