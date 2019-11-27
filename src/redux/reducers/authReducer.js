import {authAPI} from "../../api/api";

const SET_AUTH_DATA = 'SET-AUTH-DATA';

const SET_FETCHING = 'SET-FETCHING';

let initialState = {
    id: null,
    login: null,
    password: null,
    isAuth: false,
    isFetching: true
};

let authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                id: action.userID,
                login: action.login,
                password: action.password,
                isAuth: action.isAuth
            };
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return {
                ...state
            }
    }
};

export const setAuthData = (id, login, password, isAuth) => {
    return {
        type: SET_AUTH_DATA,
        userID: id,
        login: login,
        password: password,
        isAuth: isAuth
    }
};
export const setFetching = (status) => {
    return {
        type: SET_FETCHING,
        isFetching: status
    }
};




export const getAuthData = () => (dispatch) => {
    dispatch(setFetching(true));
    debugger;
    authAPI.me().then(res => {
        if(res.data.statusCode === 1) {
            dispatch(setAuthData(res.data.id, res.data.login, res.data.password, true));
        }
        setTimeout(() => {dispatch(setFetching(false))}, 900);
    });
};

export const logout = () => (dispatch) => {
    debugger;
    authAPI.logout().then( res => {
            dispatch(setFetching(true));
            dispatch(setAuthData(null, null, null, false));
            setTimeout(() => {dispatch(setFetching(false))}, 3000);
        }
    );

};

export const login = (login, password) => (dispatch) => {
    dispatch(setFetching(true));
    authAPI.login(login, password).then( res => {
        if(res.data.statusCode === 1){
            dispatch(setAuthData(res.data.info.id, res.data.info.login, res.data.info.password, true));
        } else if(res.data.statusCode === 5) {
            alert(res.data.mesages);
        }
    });
    setTimeout(() => {dispatch(setFetching(false))}, 900);
};




export default authReducer;