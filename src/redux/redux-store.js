import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";




let reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    form: formReducer
});

let store = createStore(reducers);

export default store;