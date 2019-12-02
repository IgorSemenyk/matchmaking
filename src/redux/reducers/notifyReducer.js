import {notifyAPI} from "../../api/api";

const SET_NOTIFY_DATA = 'SET-NOTIFY-DATA';



let initialState = {
    notifications: [
        {id: 0, type: 'adm', date: '27.11.2019', status: 'new', link: '/chats/1', message: 'Hello! Welcome to our new system! You can read our rule there'},
        {id: 1, type: 'meets', date: '26.11.2019', status: 'new', link: '/meets', message: 'You have new meet request with this company'},
        {id: 3, type: 'chat', date: '26.11.2019', status: 'new', link: '/chats/5', message: 'Send answer for Microsoft in yours Chats'}
    ]
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

export const updateNotify = (id) => () => {
    notifyAPI.updateNotifications(id);
};


export default notifyReducer;