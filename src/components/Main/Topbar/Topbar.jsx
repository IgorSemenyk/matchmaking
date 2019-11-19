import React from 'react';
import style from './Topbar.module.css'
import IconCarret from "../Sidebar/Icons/IconCarret";

const Topbar = () => {
    return(
        <div className={style.topbar}>
            <div className={style.userInfoContainer}>
                <div className={style.accountLogoContainer}>A</div>
                <span>Varvarych Anton <IconCarret/> </span>
                <small>ID : 999</small>
            </div>
            <div className={style.notificationStyleContainer}>
                <div className={style.notificationIndicator}> </div>
                <span>Notifications <b>3</b></span>
            </div>
            <div className={style.expoDateContainer}>
                <span>
                    <small>Expo date:</small> 19.01.2020 - 24.01.2020</span>
            </div>
        </div>
    )
};

export default Topbar;