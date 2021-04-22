import React, { Component } from 'react';
import Navbar from './components/Navbar'
import loadingAnimation from './animations/json/loading.json'
import Animation from './animations/Animations'

let leaders


class Rank extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isFetching: false
        };
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API_BASE_URL + `/api/leaderboard/?format=json`)
            .then(res => res.json())
            .then(json => this.setState({
                data: json,
                isFetching: true,
            }));
    }
    render() {

        let leaderboardData = this.state.data
        console.log(leaderboardData)

        leaders = leaderboardData.map((d) => {
        return(
        <div>
            <a className="profile-link" href={'/profile/' + d.username}>
                <div className="rank-items">
                    <p className="rank-numbers">{Number(leaderboardData.indexOf(d) + 1)}.</p>
                    <img alt="" className="rank-picture" key={d.image} src={d.image.replace("upload/", "upload/c_crop/w_469,h_469,c_fill/")} />
                    <p className="username-leaderboard">{d.username.toUpperCase()}</p>
                    <p key={d.username} className="rank-amount">{d.balance}</p>
                </div>
            </a>
        </div>
        )});
        
        console.log(leaders)

        return (
            <div>
                <Navbar name="Rank" />
                {this.state.isFetching ? '' : <Animation name={loadingAnimation} size={300} />}
                <div className="rank-flex">
                    {leaders}
                </div>
            </div>
        )
    }
}

export default Rank