const SET_AUTH_DATA = 'SET-AUTH-DATA';

let initialState = {
    id: null,
    login: null,
    password: null,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                id: action.userID,
                login: action.login,
                password: action.password,
                isAuth: true
            }
        default:
            return {
                ...state
            }
    }
}

export const setAuthData = (id, login, password) => {
    return {
        type: SET_AUTH_DATA,
        userID: id,
        login: login,
        password: password
    }
};


export default authReducer;