import {profileAPI} from "../../api/api";
import {setFetching} from "./authReducer";

const SET_PROFILE_DATA = 'SET-PROFILE-DATA';



let initialState = {
    initialValue: {
        company: 'Anigo Web Studio',
        contactName: 'Varvarich Anton',
        jobTitle: 'Developer',
        country: 'Ukraine',
        telephone: '380934261735',
        email: 'anigo.studio@gmail.com',
        logotype: 'https://www.google.com.ua/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
        city: 'Kyiv',
        adress: 'Kyrrulivska street 159',
        website: 'https://anigo.com.ua',
        category: ['backend', 'frontend', 'fullstack'],
        interest: ['javascript', 'react', 'redux']
    },



};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PROFILE_DATA:
            return {
                ...state,
                initialValue: {...action.initialValue}
            };
        default:
            return {
                ...state
            }
    }
};

let setProfileData = (data) => {
    return {
        type: SET_PROFILE_DATA,
        initialValue: {
            ...data
        }
    }
};


export let getProfileData = () => (dispatch) => {
    return profileAPI.getProfileData().then( res => {
            dispatch(setProfileData(res.data.data))
        })
};

export let updateProfileData = (formData) => (dispatch) => {
    return profileAPI.sendProfileData(formData).then(res => {
        dispatch(setFetching(true));
        dispatch(getProfileData);
        setTimeout(() => {dispatch(setFetching(false))}, 900);
    })
};


export default profileReducer;