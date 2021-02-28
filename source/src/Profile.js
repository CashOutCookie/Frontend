import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          displayed_form: '',
          logged_in: localStorage.getItem('token') ? true : false,
          username: ''
        };
    }
    componentDidMount() {
        let fullUrl = this.props.location.pathname
        if (this.state.logged_in) {
        fetch(`http://localhost:8000/api${fullUrl}?format=json`)
        .then(res => res.json())
        .then(json => {
          this.setState({ 
              username: json.username,
              emailhash: json.emailhash,
              balance: json.balance,
              accountNumber: json.accountnumber,
              joined: json.date_joined
             });
        });
    }
}
    render() {
        if (this.state.logged_in) {
        let emailHash = this.state.emailhash
        if (this.state.username) {
            return(
                <div>
                    <Navbar name="Profile" />
                    <div className="profile-parent">
                        <div className="profile-box">
                            <div className="profile-gradient">
                                <img preload="true" className="profile-picture" alt="" src={`https://gravatar.com/avatar/${emailHash}?size=100`} />
                            </div>
                                <h1 className="profile-username">{this.state.username.toUpperCase()}</h1>
                            <div className="profile-details">
                                <p>Rank: <b>#1</b></p>
                                <p>Account Number: <b>{this.state.accountNumber}</b></p>
                                <p>Cookies: <b>{this.state.balance}</b></p>
                                <p>Date Joined: <b></b></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                    <Navbar name="Profile" />
                    <div className="profile-parent">
                        <h1>User not found!</h1>
                    </div>
                </div>
            )
        }
    } else {
            return(
                <Redirect to="/login" />
            )
        }
    }
}

export default Profile;