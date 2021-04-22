import React from 'react';
import Navbar from '../components/Navbar'
import cookie from '../images/cookie.png';
import '../css/gamble.css'
import Animation from '../animations/Animations'
import transferJson from '../animations/json/print.json'
import { Redirect } from 'react-router-dom'

class MyForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    'amount': '',
    'loggedIn': localStorage.getItem('username') ? true : false
  }
  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };
  handleSubmit = (e, data) => {
    e.preventDefault();
    console.log(data)
    this.setState({
      message: 'Please wait...'
    })
    fetch(process.env.REACT_APP_API_BASE_URL + '/api/gamble/', {
      method: 'POST',
      headers: {
        'Authorization': 'JWT ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          message: json
        })
      })
  }

  render() {
    return (
      <div style={{ "height": "100vh" }}>
        {this.state.loggedIn ? '' : <Redirect to="/login" />}
        <Navbar name="Gamble" />
        <div className="coins">
          <div><img className="cookieImg" src={cookie} alt=""></img></div>
          <div><img className="cookieImg" src={cookie} alt=""></img></div>
          <div><img className="cookieImg" src={cookie} alt=""></img></div>
          <div><img className="cookieImg" src={cookie} alt=""></img></div>
          <div><img className="cookieImg" src={cookie} alt=""></img></div>
          <div><img className="cookieImg" src={cookie} alt=""></img></div>
        </div>
        <div className="coins set2">
          <div><img className="cookieImg" src={cookie} alt=""></img></div>
          <div><img className="cookieImg" src={cookie} alt=""></img></div>
          <div><img className="cookieImg" src={cookie} alt=""></img></div>
          <div><img className="cookieImg" src={cookie} alt=""></img></div>
          <div><img className="cookieImg" src={cookie} alt=""></img></div>
          <div><img className="cookieImg" src={cookie} alt=""></img></div>
        </div>

        <p className="transfer-msg">{this.state.message}</p>
        <div className="dash-items" id="gamblePage-box">
          <Animation name={transferJson} size={400} />
          <form onSubmit={e => this.handleSubmit(e, this.state)} className="transfer-form">
            <input placeholder="Amount" className="transfer-fields" name="amount" type="number" value={this.state.amount} onChange={this.handle_change} required min="100" />
            <button className="transfer-button" type="submit">Gamble!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default MyForm;