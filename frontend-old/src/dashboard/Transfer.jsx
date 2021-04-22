import React from 'react';
import Navbar from '../components/Navbar'
import Animation from '../animations/Animations'
import transferAnimation from '../animations/json/transferPage.json'
import { Redirect } from 'react-router-dom'

class MyForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    'amount': '',
    'to_user': '',
    'description': '',
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
    // console.log(data)
    this.setState({
      message: 'Please wait...'
    })
    fetch(process.env.REACT_APP_API_BASE_URL + '/api/transfer/', {
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
        <Navbar name="Transfer" />
        <p className="transfer-msg">{this.state.message}</p>
        <div className="dash-items" id="transferPage-box">
          <Animation name={transferAnimation} size={400} />
          <form onSubmit={e => this.handleSubmit(e, this.state)} className="transfer-form">
            <input placeholder="Amount" className="transfer-fields" name="amount" type="number" value={this.state.amount} onChange={this.handle_change} required/>
            <input placeholder="Account Number" className="transfer-fields" name="to_user" type="number" value={this.state.to_user} onChange={this.handle_change} required />
            <input placeholder="Description" className="transfer-fields" name="description" type="description" value={this.state.description} onChange={this.handle_change} required />
            <button className="transfer-button" type="submit">Send Cookies!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default MyForm;