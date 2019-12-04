import React from 'react';
import style from './Topbar.module.css'
import IconCarret from "../Sidebar/Icons/IconCarret";
import {NavLink} from "react-router-dom";


const Notifications = (props) => {
  return  <div className={style.notificationListContainer} >
      <div className={style.notificationsContainerHeader}>
          <p>Your new notifications:</p>
          <span onClick={ () => { props.setNotify(false)} }>&#10008;</span>
      </div>

      {props.data ? props.data.map( n => <div className={style.notificationItem} onClick={ () => {
              props.updateNotify(n.id);
              window.location.href = n.link;
          } }>
                  <p>{n.message}</p>
                  <small>{n.date}</small>
              </div>
          )
          : <p>Not notifications yet!</p>
      }
  </div>
};

const AccountList = () => {
    return <div className={style.accountListContainer} >
        <div>
            <NavLink to={'/profile'}>Edit profile</NavLink>
        </div>
        <div>
            <NavLink to={'/profile'}>Change password</NavLink>
        </div>
        <div>
            <NavLink to={'/contacts'}>Have questions?</NavLink>
        </div>
    </div>
};


const Topbar = (props) => {
    return(
        <div className={style.topbar}>
            <div className={style.userInfoContainer}>
                <div className={style.accountLogoContainer}>A</div>
                <span onClick={ () => {props.setAccountListStatus(!props.accountListStatus) } }>{props.data.userContact} <IconCarret/> </span>
                <small>ID : {props.data.userID}</small>
            </div>
            {
                props.accountListStatus && <AccountList />
            }
            <div className={props.data.notifications ? style.notificationStyleContainer : style.notificationStyleContainer + ' ' + style.notificationIndicatorEmpty} onClick={ () => { props.setNotify(true) } }>
                <div className={style.notificationIndicator}> </div>
                <span>Notifications <b>{ props.data.notifications ? props.data.notifications.length : '0'  }</b></span>
            </div>
            { props.notifyStatus && props.data.notifications && <Notifications data={props.data.notifications}
                                                   setNotify={props.setNotify}
                                                   notifyStatus={props.notifyStatus}
                                                   updateNotify={props.updateNotify}
            /> }
            <div className={style.expoDateContainer}>
                <span>
                    <small>Expo date:</small> {props.data.expoDate.start} - {props.data.expoDate.finish}
                </span>
            </div>
        </div>
    )
};

export default Topbar;