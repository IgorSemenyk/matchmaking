import React from 'react';
import style from "../Chat.module.css";

const ChatMessages = () => {
    return <div className={style.messages}>
        <div className={style.messageItem}>
            <span>Contact name:</span>
            <div>
                <p>Hello my friend!</p>
                <small>31 November, 14:47</small>
            </div>
        </div>
        <div className={style.messageItem + ' ' + style.yourMessage}>
            <span>You:</span>
            <div>
                <p>Hi</p>
                <small>31 November, 14:47</small>
            </div>
        </div>
        <div className={style.messageItem}>
            <span>Contact name:</span>
            <div>
                <p>Can we meet tommorow?</p>
                <small>31 November, 14:47</small>
            </div>
        </div>
        <div className={style.messageInput}>
            <input type="text"/>
            <button>Send</button>
        </div>
    </div>
};


export default ChatMessages;