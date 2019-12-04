import {commonAPI} from "../../api/api";
import {setFetching} from "./authReducer";

const SET_COMMON_DATA = 'SET-COMMON-DATA';


let initialState = {
    "data": {
        "expoDate": {
            "start": "",
            "finish": ""
        },
        "companyName": null,
        "companyContactName": null,
        "category": [],
        "country": [],
        "interest": [],
        "counters": {
            "meetingsAll": 0,
            "pendingMeetings": 0,
            "meetingsUnconfirmed": 0,
            "dialog": 0
        },
        "meetsPopular": [{
            "id": 2,
            "type": "b",
            "company": "MedBuy",
            "description": "OnlineStrore",
            "contactName": "",
            "jobTitle": "",
            "country": "",
            "telephone": "",
            "email": "",
            "logotype": "",
            "city": "",
            "adress": "",
            "website": "",
            "category": "",
            "interest": "",
            "stand": ""
        }]
    },
    "statusCode": 1
};

let commonReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_COMMON_DATA:
            return {
                ...state,
                data: {...action.data}
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