import React from 'react';
import chart from '../../images/chart.svg'
import home from '../../images/home.svg'
import logout from '../../images/logout.svg'
import profile from '../../images/profile.svg'
import notif from '../../images/notif.svg'
import Dashboard from '../AppContent/Dashboard'

function SidebarIcons({ onChange }) {

    function changePageName(page) {
        document.querySelector('.side-active').classList.remove('side-active')
        document.querySelector(`.${page}-icon`).classList.add('side-active')
        if (page === 'Dashboard') {
            onChange(page)
        } else {
            onChange(page)
        }
    }
    
    return(
        <div className="sidebar-flex">
            <div onClick={() => changePageName("Dashboard")} className="side-icon Dashboard-icon side-active">
                <img alt="" src={home} />
            </div>

            <div onClick={() => changePageName("Notifications")} className="side-icon Notifications-icon mtop">
                <img alt="" src={notif} />
            </div>

            <div onClick={() => changePageName("Leaderboard")} className="side-icon Leaderboard-icon mtop">
                <img alt="" src={chart} />
            </div>

            <div onClick={() => changePageName("Profile")} className="side-icon Profile-icon mtop">
                <img alt="" src={profile} />
            </div>

            <div onClick={() => changePageName("Logout")} className="side-icon Logout-icon mtop">
                <img alt="" src={logout} />
            </div>

        </div>
        
    )
}

export default SidebarIcons