import React from 'react';
import style from './Topbar.module.css'
import IconCarret from "../Sidebar/Icons/IconCarret";


const Notifications = (props) => {
  return  <div className={style.notificationListContainer}>
      <div className={style.notificationsContainerHeader}>
          <p>Your new notifications:</p>
          <span onClick={ () => { props.setNotify(false)} }>&#10008;</span>
      </div>
      {props.data.map( n => <div className={style.notificationItem}>
                  <p>{n.message}</p>
                  <small>{n.date}</small>
              </div>
          )
      }
  </div>
};


const Topbar = (props) => {
    debugger;
    return(
        <div className={style.topbar}>
            <div className={style.userInfoContainer}>
                <div className={style.accountLogoContainer}>A</div>
                <span>Varvarych Anton <IconCarret/> </span>
                <small>ID : 999</small>
            </div>
            <div className={style.notificationStyleContainer} onClick={ () => { props.setNotify(true) } }>
                <div className={style.notificationIndicator}> </div>
                <span>Notifications <b>3</b></span>
            </div>
            { props.notifyStatus && <Notifications data={props.data.notifications}
                                                   setNotify={props.setNotify}
                                                   notifyStatus={props.notifyStatus}
            /> }
            <div className={style.expoDateContainer}>
                <span>
                    <small>Expo date:</small> 19.01.2020 - 24.01.2020
                </span>
            </div>
        </div>
    )
};

export default Topbar;