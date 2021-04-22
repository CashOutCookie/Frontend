import React, { Component } from 'react'
import Navbar from './components/Navbar';
import './css/changelog.css'

class Changelog extends Component {
    render() {
        return (
            <div>
                <Navbar name="Changelog" />
                <div className="changelog">
                    <h1 className="heading">{'Welcome to the Changelog'}</h1>

                    <h2 className="tag">{'Patch Release - '}<span>{'v1.2'}</span>{' - March 15th, 2021'}</h2>
                    <div className="vl3" />
                    <ul className="lists">
                        <li>{'Update Profile Picture'}
                        <li>{'Reset Password'}</li>
                            <li>{'Improved Styling'}</li>
                            <ul className="sublist">
                                <li>{'Improved Profile Page'}</li>
                                <li>{'Improved Responsiveness'}</li>
                                <li>{'Better Navbar'}</li>
                            </ul>
                        </li>
                    </ul>
                    <h2 className="tag">{'Patch Release - '}<span>{'v1.1'}</span>{' - March 13th, 2021'}</h2>
                    <div className="vl2" />
                    <ul className="lists">
                        <li>{'Tons of bug fixes'}
                            <ul className="sublist">
                                <li>{'Minor improvements to pages'}</li>
                                <li>{'CSS fixes'}</li>
                                <li>{'Account fixes'}</li>
                                <li>{'API fixes'}</li>
                                <li>{'JSON fixes'}</li>
                            </ul>
                        </li>
                    </ul>
                    <h2 className="tag">{'Initial Release - '}<span>{'v1.0'}</span>{' - March 10th, 2021'}</h2>
                    <div className="vl" />
                    <ul className="lists">
                        <li>{'Authentication System'}</li>
                        <li>{'Admin System'}</li>
                        <li>{'Custom API'}</li>
                        <li>{'Main Website'}
                            <ul className="sublist">
                                <li>{'Home'}</li>
                                <li>{'Dashboard'}</li>
                                <li>{'Transfer'}</li>
                                <li>{'Quiz'}</li>
                                <li>{'Gamble'}</li>
                                <li>{'Profile'}</li>
                                <li>{'Leaderboard'}</li>
                                <li>{'Tutorial'}</li>
                                <li>{'Report'}</li>
                                <li>{'Contact'}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Changelog;