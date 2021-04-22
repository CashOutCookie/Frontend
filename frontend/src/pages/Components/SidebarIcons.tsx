import React from 'react';

import chart from '../../images/chart.svg'
import home from '../../images/home.svg'
import logout from '../../images/logout.svg'
import profile from '../../images/profile.svg'
import notif from '../../images/notif.svg'

function SidebarIcons() {
    return(
        <div className="sidebar-flex">

            <div className="home-icon side-active">
                <img alt="" src={home} />
            </div>

            <div className="notif-icon mtop">
                <img alt="" src={notif} />
            </div>

            <div className="chart-icon mtop">
                <img alt="" src={chart} />
            </div>

            <div className="profile-icon mtop">
                <img alt="" src={profile} />
            </div>

            <div className="logout-icon mtop">
                <img alt="" src={logout} />
            </div>

        </div>
        
    )
}

export default SidebarIcons