import React, { Component } from 'react';
import Navbar from './components/Navbar'
import loadingAnimation from './animations/json/loading.json'
import { Redirect } from 'react-router-dom'
import Animation from './animations/Animations'
import axios from 'axios';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayed_form: '',
            logged_in: localStorage.getItem('username') ? true : false,
            username: '',
            image: '',
            file: null,
            fetched: false
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        let fullUrl = this.props.location.pathname
        if (this.state.logged_in) {
            fetch(process.env.REACT_APP_API_BASE_URL + `/api${fullUrl}?format=json`)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        username: json.username,
                        balance: json.balance,
                        accountNumber: json.accountid,
                        rank: json.rank,
                        image: json.image,
                        joined: json.date_joined.substring(0, 7),
                        fetched: true
                    });
                }).catch((err) => {
                    this.setState({
                        username: null
                    })
                });
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    };

    handleImageChange = (e) => {
        this.setState({
            image: e.target.files[0],
            file: URL.createObjectURL(e.target.files[0])
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let form_data = new FormData();
        form_data.append('image', this.state.image, this.state.image.name);
        form_data.append('title', this.state.title);
        form_data.append('content', this.state.content);
        let url = process.env.REACT_APP_API_BASE_URL + '/api/update/';
        axios.put(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': 'JWT ' + localStorage.getItem('token'),
            }
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err))
    };


    render() {
        if (this.state.logged_in) {
            // let userUrl = this.props.location.pathname
            if (this.state.username) {
                return (
                    <div>
                        <Navbar name="Profile" />
                        <div className="profile-parent">
                            <div className="profile-box">
                                <div className="profile-gradient">
                                    <img alt="" className="profile-picture" preload="true" src={this.state.image} onError={(e) => { e.target.onerror = null; e.target.src = this.state.file }} key={Date.now()} onChange={this.handleImageChange} />
                                </div>
                                {this.state.username === localStorage.getItem('username') ? <form onSubmit={this.handleSubmit} className="pfp-update-form">
                                    <input type="file"
                                        id="image"
                                        accept="image/png, image/jpeg" onChange={this.handleImageChange} required />
                                    <button className="pfpupdatebtn" type="submit">{'Update'}</button>
                                </form> : ''}
                                <h1 className="profile-username">{this.state.username.toUpperCase()}</h1>
                                <div className="profile-details">
                                    <p className="profiledetails-components">{'Rank: '}<b>#{this.state.rank}</b></p>
                                    <p className="profiledetails-components">{'Account Number: '}<b>{this.state.accountNumber}</b></p>
                                    <p className="profiledetails-components">{'Cookies: '}<b>{this.state.balance}</b></p>
                                    <p className="profiledetails-components">{'Date Joined: '}<b>{this.state.joined}</b></p>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (this.state.username === null) {
                return (
                    <div>
                        <Navbar name="Profile" />
                        <div className="profile-parent">
                            <h1 className="user-notfound">{'User not found!'}</h1>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        <Navbar name="Profile" />
                        {this.state.fetched ? '' : <Animation name={loadingAnimation} size={300} />}
                    </div>
                )
            }
        } else {
            return (
                <div>
                    <Redirect to="/login" />
                </div>
            )
        }
    }
}

export default Profile;