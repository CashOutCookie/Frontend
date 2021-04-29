import React from 'react';
import { changePageName } from '../App'
import chart from '../../images/chart.svg'
import home from '../../images/home.svg'
import logout from '../../images/logout.svg'
import profile from '../../images/profile.svg'
import notif from '../../images/notif.svg'


function SidebarIcons() {

    function changePageNamePrivate(page) {
        document.querySelector('.side-active').classList.remove('side-active')
        document.querySelector(`.${page}-icon`).classList.add('side-active')
        changePageName(page)
    }
    
    return(
        <div className="sidebar-flex">
            <div onClick={() => changePageNamePrivate("Dashboard")} className="side-icon Dashboard-icon side-active">
                <img alt="" src={home} />
            </div>

            <div onClick={() => changePageNamePrivate("Notifications")} className="side-icon Notifications-icon mtop">
                <img alt="" src={notif} />
            </div>

            <div onClick={() => changePageNamePrivate("Leaderboard")} className="side-icon Leaderboard-icon mtop">
                <img alt="" src={chart} />
            </div>

            <div onClick={() => changePageNamePrivate("Profile")} className="side-icon Profile-icon mtop">
                <img alt="" src={profile} />
            </div>

            <div onClick={() => changePageNamePrivate("Logout")} className="side-icon Logout-icon mtop">
                <img alt="" src={logout} />
            </div>

        </div>
        
    )
}

export default SidebarIcons