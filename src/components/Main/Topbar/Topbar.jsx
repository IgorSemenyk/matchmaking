import React from 'react';
import style from './Topbar.module.css'

const Topbar = () => {
    return(
        <div className={style.topbar}>
            <div className={style.userInfoContainer}>
                <span>Varvarych Anton </span>
                <small>ID: 999</small>
            </div>
            <div className={style.notificationStyleContainer}>
                <span>Notifications (1)</span>
            </div>
            <div className={style.expoDateContainer}>
                <span>Expo date: 19.01.2020 - 24.01.2020</span>
            </div>
        </div>
    )
};

export default Topbar;