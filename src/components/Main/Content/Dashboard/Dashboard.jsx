import React from 'react';
import style from './Dashboard.module.css';
import logo from './../../../../img/logotype.png';
import {NavLink, Redirect} from "react-router-dom";

const Dashboard = (props) => {

    return(
        <div className={style.dashboard}>
            <div className={style.dashboardCounters}>
                <div className={style.dashboardCounterItem}>
                    <p>Total meets</p>
                    <b>{ props.counters.meetingsAll }</b>
                    <div className={style.dasboardStatusBar}></div>
                </div>
                <div className={style.dashboardCounterItem}>
                    <p>Pending Meetings</p>
                    <b>{ props.counters.pendingMeetings }</b>
                    <div className={style.dasboardStatusBar}></div>
                </div>
                <div className={style.dashboardCounterItem}>
                    <p>Unconfirmed meets</p>
                    <b>{ props.counters.meetingsUnconfirmed}</b>
                    <div className={style.dasboardStatusBar}></div>
                </div>
                <div className={style.dashboardCounterItem}>
                    <p>Dialogs</p>
                    <b>{ props.counters.dialog }</b>
                    <div className={style.dasboardStatusBar}></div>
                </div>
            </div>
            <div className={style.dashboardBestExibitors}>
                <div className={style.dashboardBestStatus}>
                    <h3>Best Matching Exhibitors</h3>
                </div>
                <div className={style.dashboardBestExibitorsContainer}>
                    {
                        props.pupolarCompany && props.pupolarCompany.map( c => c && <div className={style.dashboardBestExibitorsItem} key={c.id}>
                            <img src={c.logotype} alt=""/>
                            <b>{ c.company }</b>
                            <p>	{ c.description }</p>
                            <span>{c.stand }</span>
                            <NavLink to={'/company/' + c.id}>View Profile</NavLink>
                            <div>
                                <p>{ c.country }</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
};



export default Dashboard;