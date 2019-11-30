import React from 'react';
import style from './Chat.module.css';
import {Route} from "react-router-dom";
import ChatMessagesContainer from "./ChatMessages/ChatMessagesContainer";


const Chat = () => {
    return(
        <div className={style.chat}>
            <div className={style.dialogs}>
                <div className={style.dialogItem}>
                    <div className={style.dialogLogo}>
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/holiday-logo-static-201911?wid=152&hei=180&fmt=png-alpha&qlt=80&.v=1573064312035" alt=""/>
                    </div>
                    <div className={style.companyName}>
                        <span>Company name</span>
                    </div>
                    <div>
                        <small>Online</small>
                    </div>
                </div>
                <div className={style.dialogItem}>
                    <div className={style.dialogLogo}>
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/holiday-logo-static-201911?wid=152&hei=180&fmt=png-alpha&qlt=80&.v=1573064312035" alt=""/>
                    </div>
                    <div className={style.companyName}>
                        <span>Company name</span>
                    </div>
                    <div>
                        <small>Online</small>
                    </div>
                </div>
                <div className={style.dialogItem}>
                    <div className={style.dialogLogo}>
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/holiday-logo-static-201911?wid=152&hei=180&fmt=png-alpha&qlt=80&.v=1573064312035" alt=""/>
                    </div>
                    <div className={style.companyName}>
                        <span>Company name</span>
                    </div>
                    <div>
                        <small>Online</small>
                    </div>
                </div>
                <div className={style.dialogItem}>
                    <div className={style.dialogLogo}>
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/holiday-logo-static-201911?wid=152&hei=180&fmt=png-alpha&qlt=80&.v=1573064312035" alt=""/>
                    </div>
                    <div className={style.companyName}>
                        <span>Company name</span>
                    </div>
                    <div>
                        <small>Online</small>
                    </div>
                </div>
            </div>
            <Route path={'/chat/:companyID'} render={ () => <ChatMessagesContainer />  }/>
        </div>
    )
};



export default Chat;