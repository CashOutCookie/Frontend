import React from "react";
import '../css/email.css'

class EmailForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    'email': '',
  }
  handleClick = () => {
    this.props.toggle();
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
  handleSubmit = (e, data) => {
    e.preventDefault();
    console.log(data)
    this.setState({
      message: 'Please wait...'
    })
    fetch(process.env.REACT_APP_API_BASE_URL + '/api/changepassword/', {
      method: 'POST',
      headers: {

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
      <div className="bruhmain">
        <div className="content">
          <span className="close" onClick={this.handleClick}>&times;    </span>
          <form className="passwordreset-email-form-main" onSubmit={e => this.handleSubmit(e, this.state)}>
            <h2>{'Enter your registered email where we can send you instructions to reset your password.'}</h2>
            <input maxLength="50" placeholder="Email" className="password-reset-email" required type="text" minLength="3" name="email" value={this.state.email} onChange={this.handle_change} />
            <button className="emailform-button" type="submit">{'Send Email'}</button>
            <p className="emailform-infomessage">{this.state.message}</p>
          </form>
        </div>
      </div>
    );
  }
}
export default EmailForm;