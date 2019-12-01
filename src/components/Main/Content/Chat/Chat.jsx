import React from 'react';
import style from './Chat.module.css';
import {NavLink, Route} from "react-router-dom";
import ChatMessagesContainer from "./ChatMessages/ChatMessagesContainer";
import newMessageIcon from './../../../../img/emails.png';


const Chat = (props) => {
    debugger;
    return(
        <div className={style.chat}>
            <div className={style.dialogs}>
                {
                    props.dialogs.map( d => <NavLink to={'/chat/' + d.sid} activeClassName={style.activeDialog}>
                        <div className={style.dialogItem} key={d.sid}>
                            <div className={style.dialogLogo}>
                                <img src={d.logotype} alt=""/>
                            </div>
                            <div className={style.companyName}>
                                <span>{d.company}</span>
                            </div>
                            <div>
                                <small>{ d.hasNewMessage ? <img src={newMessageIcon} alt="" className={style.iconEmail}/> : ' ' }</small>
                            </div>
                        </div>
                    </NavLink>)
                }
            </div>
            <Route path={'/chat/:companyID'} render={ () => <ChatMessagesContainer />  }/>
        </div>
    )
};



export default Chat;