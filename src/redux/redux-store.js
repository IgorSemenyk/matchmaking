import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";
import companiesReducer from "./reducers/companiesReducer";
import thunk from "redux-thunk";




let reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    companies: companiesReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;