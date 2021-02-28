import React, { Component } from 'react';
import Navbar from './components/Navbar'

let leaders
let balance
let profilePicture


class Rank extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }
    
    componentDidMount() {
        fetch(`http://localhost:8000/api/leaderboard/?format=json`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
    }
    render() {
        let leaderboardData = this.state.data
        leaders = leaderboardData.map((d) => <a className="profile-link" href={'/profile/' + d.username}>{d.username.toUpperCase()}</a>);
        balance = leaderboardData.map((d) => <p key={d.balance}>{d.balance}</p>);
        profilePicture = leaderboardData.map((d) => <a className="profile-link" href={'/profile/' + d.username}><img className="rank-picture" key={d.emailhash} alt="" src={`https://gravatar.com/avatar/${d.emailhash}`}></img></a>);

        let rankArray = [];

        for (let i=1; i<leaderboardData.length + 1; i++) {
            rankArray.push(<p><b>{i}.</b></p>)
        }
        console.log(rankArray)

        return(
            <div>
                <Navbar name="Rank" />
                <div className="rank-flex">
                        <div className="rank-number">
                            {rankArray}
                        </div>
                        <div className="leaders-img">
                            {profilePicture}
                        </div>
                        <div className="leaders-name">
                            {leaders}
                        </div>
                        <div className="leaders-balance">
                            {balance}
                        </div>
                </div>
            </div>
        )
    }
}

export default Rank