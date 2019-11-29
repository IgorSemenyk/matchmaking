import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";
import companiesReducer from "./reducers/companiesReducer";
import thunk from "redux-thunk";
import commonReducer from "./reducers/commonReducer";
import meetsReducer from "./reducers/meetsReducer";




let reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    companies: companiesReducer,
    common: commonReducer,
    meets: meetsReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;