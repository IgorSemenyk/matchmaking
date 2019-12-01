import {dialogsAPI, messagesAPI} from "../../api/api";

const SET_DIALOGS = 'SET-DIALOGS';
const SET_MESSAGES = 'SET-MESSAGES';



const initialState = {
    messages: [],
    dialogs: []
};

let chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIALOGS:
            return {
                ...state,
                dialogs: action.dialogs
            }
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            }
        default:
            return {
                ...state
            };

    }
};

let setDialogs = (dialogs) => {
    return {
        type: SET_DIALOGS,
        dialogs: dialogs
    }
};

export let getDialogs = () => (dispatch) => {

    dialogsAPI.getDialogs().then( res => {
        dispatch(setDialogs(res.data.dialogs))
    })
};


let setMessages = (messages) => {
    return {
        type: SET_MESSAGES,
        messages: messages
    }
};


export let  getMessagesData = (id) => (dispatch) => {
    messagesAPI.getMessages(id).then( res => {
        dispatch(setMessages(res.data.messages));
    })
};


export let sendMessage = (id, message) => (dispatch) => {
    messagesAPI.sendMessage(id, message).then( res => {
        dispatch(getMessagesData(id));
    })
};

export default chatReducer;