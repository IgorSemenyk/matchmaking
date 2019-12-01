import React from 'react';
import style from "../Chat.module.css";
import {withRouter} from "react-router-dom";
import {Field} from "redux-form";

const ChatMessages = (props) => {
    console.log('render ChatMessage main');
    props.changeDialog(props.match.params.companyID);

    let messageClass = style.messageItem;
    let yourMessageClass = style.messageItem + ' ' + style.yourMessage;

    if(props.messages && props.messages.length > 0) {
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
                <form onSubmit={props.handleSubmit}>
                    <Field component={'input'} type="text" name={'message'}/>
                    <button>Send</button>
                </form>

            </div>
        </div>
    } else {
        return <div className={style.messages}>
            <h4>Not messages yet</h4>
        </div>
    }
};


export default withRouter(ChatMessages);