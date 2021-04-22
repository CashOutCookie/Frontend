import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import registerJson from './animations/json/register.json'
import loadingJson from './animations/json/loading.json'
import Animation from './animations/Animations'
import './css/email.css'
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posted: false,
            animation: registerJson
        }
    }
    state = {
        username: '',
        email: '',
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
    handle_signup = (e, data) => {
        this.setState({
            animation: loadingJson
        })
        e.preventDefault();
        fetch(process.env.REACT_APP_API_BASE_URL + '/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                if (json.username?.[0] === 'A user with that username already exists.') {
                    alert(json.username[0])
                    this.setState({
                        animation: registerJson
                    });
                } else if (json.email?.[0] === 'This field must be unique.') {
                    alert('This email is already registered.')
                    this.setState({
                        animation: registerJson
                    });
                } else {
                    this.setState({
                        posted: true,
                    });
                }
            });
    };
    render() {
        return (
            <div>
                <Navbar name="Signup" />
                {this.state.posted ? <Redirect to='/verify' /> : ''}
                <div className="signup-flex">
                    <Animation name={this.state.animation} size={400} />
                    <form className="signup-parent" onSubmit={e => this.handle_signup(e, this.state)}>
                        <input maxLength="12" placeholder="Username" className="signup-username" required type="text" minLength="2" name="username" value={this.state.username} onChange={this.handle_change} />
                        <input placeholder="Email" className="signup-email" required type="email" name="email" value={this.state.email} onChange={this.handle_change} />
                        <input maxLength="56" placeholder="Password" className="signup-password" required type="password" minLength="6" name="password" value={this.state.password} onChange={this.handle_change} />
                        {/* <input className="signup-button" type="submit"/> */}
                        <button className="signup-button" type="submit">{'Signup'}</button>
                    </form>
                </div>
                <p className="signup-para">{'Already have an account? '}<a className="loginredirect-link" href="/login">{'Login'}</a></p>
            </div>
        )
    }
}
export default Signup