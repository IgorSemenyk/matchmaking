import {commonAPI} from "../../api/api";
import {setFetching} from "./authReducer";

const SET_COMMON_DATA = 'SET-COMMON-DATA';


let initialState = {
    expoDate: {
        start: '27.11.2019',
        finish: '31.11.2019'
    },
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