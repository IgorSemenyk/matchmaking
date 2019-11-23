import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";
import companiesReducer from "./reducers/companiesReducer";




let reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    companies: companiesReducer,
    form: formReducer
});

let store = createStore(reducers);

export default store;