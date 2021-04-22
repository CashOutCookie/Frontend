import React, { Component } from 'react';
import '../css/Menu.css'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('username') ? true : false,
      username: localStorage.getItem('username'),
      fetched: false,
    };
  }
  render() {
    return (
      <div>
        <button aria-label="Main Menu" className="menu" onClick={onClickButton}>
          <svg height="50" viewBox="0 0 100 100" width="50">
            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path className="line line2" d="M 20,50 H 80" />
            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>
        <div className="sidebar" id="mySidebar">
          <div className="sidebar-links">
            {/* <a href={`/profile/${this.state.username}`}>Loggedin as { this.state.username }</a> */}
            <a href={localStorage.getItem('username') ? '/dashboard' : '/'}>{localStorage.getItem('username') ? 'Dashboard' : 'Home'}</a>
            {localStorage.getItem('username') ? <a href={"/profile/" + localStorage.getItem('username')}>{'Profile'}</a> : ''}
            <a href="/rank">{'Rank'}</a>
            <a href="/rules">{'Rules'}</a>
            <a href="/howtoplay">{'Tutorial'}</a>
            {localStorage.getItem('username') ? '' : <a href="/credits">{'Credits'}</a>}
            <a href="/report">{'Report'}</a>
            <a href="/contact">{'Contact'}</a>
            <a href={localStorage.getItem('username') ? '/logout' : '/login'}>{localStorage.getItem('username') ? 'Logout' : 'Login/Signup'}</a>
            <a className="changebutton" href="/changelog">{'v1.2'}</a>
            <a className="discord-link" href="https://discord.gg/Qh53xzgZqA">
              <img alt="discord-logo" className="discord-logo" src="https://cdn.discordapp.com/attachments/812560533428502531/819954966792765471/discord.png" />
              <p className="discord-text">{'Discord Support Server'}</p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

function onClickButton() {
  let menuButton = document.querySelector('.menu')
  menuButton.classList.toggle('opened');
  menuButton.setAttribute('aria-expanded', menuButton.classList.contains('opened'));
  let sideBar = document.getElementById("mySidebar")
  console.log(sideBar.style.width)
  if (sideBar.style.width === "250px") {
    sideBar.style.width = "0px";
  } else {
    sideBar.style.width = "250px";
  }
}

export default Menu