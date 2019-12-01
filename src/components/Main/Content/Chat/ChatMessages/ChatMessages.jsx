import React from 'react';
import style from "../Chat.module.css";

const ChatMessages = (props) => {
    let messageClass = style.messageItem;
    let yourMessageClass = style.messageItem + ' ' + style.yourMessage;
    return <div className={style.messages}>
        {
            props.messages.map( m => <div className={(m.setter === props.userID) ? yourMessageClass : messageClass}
                                          key={m.mid}>
                <span>{(m.setter === props.userID) ? 'You:' : 'Company:'}</span>
                <div>
                    <p>{m.message}</p>
                    <small>{m.date}</small>
                </div>
            </div>)
        }
        <div className={style.messageInput}>
            <input type="text"/>
            <button>Send</button>
        </div>
    </div>
};


export default ChatMessages;