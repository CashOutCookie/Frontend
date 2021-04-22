import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import registerJson from './animations/json/register.json'
import loadingJson from './animations/json/loading.json'
import Animation from './animations/Animations'

import EmailForm from './components/EmailForm'
import './css/email.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posted: false,
            animation: registerJson
        }
    }
    state = {
        username: '',
        password: ''
    };
    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        });
    };
    handle_login = (e, data) => {
        this.setState({
            animation: loadingJson
        })
        e.preventDefault();
        fetch(process.env.REACT_APP_API_BASE_URL + '/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                if (json.non_field_errors?.[0]) {
                    alert(json.non_field_errors[0])
                    this.setState({
                        animation: registerJson
                    })
                } else {
                    localStorage.setItem('token', json.token);
                    localStorage.setItem('username', json.user.username);
                    this.setState({
                        logged_in: true,
                        username: json.user.username,
                        posted: true,
                    });
                }
            });
    };

    /* Forgot password, Email Form Popup */
    toggle_emailform = () => {
        this.setState({
            seen: !this.state.seen
        });
    };

    render() {
        return (
            <div>
                <Navbar name="Login" />
                {this.state.posted ? <Redirect to={'/profile/' + this.state.username} /> : ''}
                <div className="signup-flex">
                    <Animation name={this.state.animation} size={400} />
                    <form className="signup-parent" onSubmit={e => this.handle_login(e, this.state)}>
                        <input maxLength="30" placeholder="Username or Email" className="signup-username" required type="text" minLength="2" name="username_or_email" value={this.state.username} onChange={this.handle_change} autocomplete="username" />
                        <input maxLength="56" placeholder="Password" className="signup-password" required type="password" minLength="4" name="password" value={this.state.password} onChange={this.handle_change} autocomplete="current-password" />
                        <button className="signup-button" type="submit">{'Login'}</button>
                    </form>
                </div>
                <p className="signup-para">{"Don't have an account? "}<a className="signupredirect-link" href="/signup">{'Sign up'}</a>
                    <div className="passwordreset-div" onClick={this.toggle_emailform}>
                        <p className="forgotpassword-btn">{'Forgot your password?'}</p>
                    </div>
                    {this.state.seen ? <EmailForm toggle={this.toggle_emailform} /> : null}</p>
            </div>
        )
    }
}
export default Login