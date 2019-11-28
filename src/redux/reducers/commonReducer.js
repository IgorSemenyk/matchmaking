import {commonAPI} from "../../api/api";
import {setFetching} from "./authReducer";

const SET_COMMON_DATA = 'SET-COMMON-DATA';


let initialState = {
    expoDate: {
        start: '27.11.2019',
        finish: '31.11.2019'
    },
    notifications: [
        {id: 0, type: 'adm', date: '27.11.2019', status: 'new', link: '/chats/1', message: 'Hello! Welcome to our new system! You can read our rule there'},
        {id: 1, type: 'meets', date: '26.11.2019', status: 'new', link: '/meets', message: 'You have new meet request with this company'},
        {id: 3, type: 'chat', date: '26.11.2019', status: 'new', link: '/chats/5', message: 'Send answer for Microsoft in yours Chats'}

    ],
    lang: 'RUS'
};

let commonReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_COMMON_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return {
                ...state
            }
    }
};

let setCommonData = (data) => {
    return {
        type: SET_COMMON_DATA,
        data: data
    }
};


export let readNotification = (notifyID, userID) => (dispatch) => {
   commonAPI.readNotify(notifyID).then(res => {
       commonAPI.getCommonData(userID).then( resp => {
           dispatch(setFetching(true));
           dispatch(setCommonData(resp.data));
           setTimeout(() => {dispatch(setFetching(false))}, 900);
       })
   })
};

export default commonReducer;