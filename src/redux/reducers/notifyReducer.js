import {notifyAPI} from "../../api/api";

const SET_NOTIFY_DATA = 'SET-NOTIFY-DATA';



let initialState = {
    notifications: null
};


let notifyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTIFY_DATA:
            return {
                ...state,
                notifications: action.notifications
            };
        default:
            return {
                ...state
            }
    }
};

export const setNotify = (type, user, messageData) => (dispatch) => {
    let newNotify = {
        type: type,
        user: user,
        status: 'new',
        message: null,
        link: null
    };

    switch (type) {
        case 'adm':
            newNotify.message = messageData.text;
            newNotify.link = '/dashboard';
            break;
        case 'chat':
            newNotify.message = 'Send answer for ' + messageData.text + 'in yours Chats';
            newNotify.link = '/chat';
            break;
        case 'meets':
            newNotify.message = 'You have new meet request with ' + messageData.text;
            newNotify.link = '/meets';
            break;
    }

    notifyAPI.setNotification(newNotify).then( res => {
        dispatch(getNotify);
    })
};

export const setNotifyData = (notifications) => {
    return {
        type: SET_NOTIFY_DATA,
        notifications: notifications
    }
};

export const getNotify = () => (dispatch) => {
    notifyAPI.getNotifications().then( res => {
        dispatch(setNotifyData(res.data.notifications));
    })
};

export const updateNotify = (id) => (dispatch) => {
    notifyAPI.updateNotifications(id).then( res => {
        dispatch(getNotify);
    })
};


export default notifyReducer;