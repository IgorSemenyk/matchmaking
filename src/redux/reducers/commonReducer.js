import {commonAPI} from "../../api/api";
import {setFetching} from "./authReducer";

const SET_COMMON_DATA = 'SET-COMMON-DATA';


let initialState = {
    expoDate: {
        start: '27.11.2019',
        finish: '31.11.2019'
    },
    lang: 'RUS',
    companyName: null,
    companyContactName: null
};

let commonReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_COMMON_DATA:
            return {
                ...state,
                ...action.data
            };
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


export let setCommon = () => (dispatch) => {
   commonAPI.getCommonData().then( res => {
       dispatch(setCommonData(res.data.data));
   });
};

export default commonReducer;