import {meetsAPI} from "../../api/api";

const SET_MEETS = 'SET-MEETS';
const SET_MEET = 'SET-MEET';


let initialState = {
    meets: [
        {"id":1,"bid":1,"cid":4,"stand":"STF-14_ALL","date":"2019-11-26","time":"19:00:00","status":1}
        ]
};

let meetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MEETS:
            return {
                ...state,
                meets: action.meets
            }
        default:
            return {
                ...state
            }
    }
};

export const setMeets = (meets) => {
    return {
        type: SET_MEETS,
        meets: meets
    }
};

export const getMeetsData = () => (dispatch) => {
    meetsAPI.getMeets().then(res => {
        debugger;
        dispatch(setMeets(res.data.data));
    })
};

export const setNewMeet = (meet) => (dispatch) => {
    meetsAPI.setMeet(meet).then(
        dispatch(getMeetsData())
    )
};


export default meetsReducer;