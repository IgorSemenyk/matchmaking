import React from 'react';
import style from "./AdmDashboard.module.css";


const AdmDashboard = (props) => {
    return <div>
        <header>Dashboard</header>
        <div className={style.dashboard}>
            <h3>Meets:</h3>
            <div className={style.dashboardCounters}>
                <div className={style.dashboardCounterItem}>
                    <p>Total meets</p>
                    <b>745</b>
                    <div className={style.dasboardStatusBar}></div>
                </div>
                <div className={style.dashboardCounterItem}>
                    <p>Pending Meetings</p>
                    <b>639</b>
                    <div className={style.dasboardStatusBar}></div>
                </div>
                <div className={style.dashboardCounterItem}>
                    <p>Unconfirmed meets</p>
                    <b>101</b>
                    <div className={style.dasboardStatusBar}></div>
                </div>
                <div className={style.dashboardCounterItem}>
                    <p>Cancel meets</p>
                    <b>5</b>
                    <div className={style.dasboardStatusBar}></div>
                </div>
            </div>
            <h3>Companies:</h3>
            <div className={style.dashboardCounters}>
                <div className={style.dashboardCounterItem}>
                    <p>Total companies</p>
                    <b>453</b>
                    <div className={style.dasboardStatusBar}></div>
                </div>
                <div className={style.dashboardCounterItem}>
                    <p>Manufacturers</p>
                    <b>153</b>
                    <div className={style.dasboardStatusBar}></div>
                </div>
                <div className={style.dashboardCounterItem}>
                    <p>Distributors</p>
                    <b>300</b>
                    <div className={style.dasboardStatusBar}></div>
                </div>
            </div>
            <h3>Dialogs:</h3>
            <div className={style.dashboardCounters}>
                <div className={style.dashboardCounterItem}>
                    <p>Total dialogs</p>
                    <b>1450</b>
                    <div className={style.dasboardStatusBar}></div>
                </div>
            </div>
        </div>
    </div>
};

export default AdmDashboard;