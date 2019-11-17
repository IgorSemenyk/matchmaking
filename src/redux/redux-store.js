import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./reducers/authReducer";




let reducers = combineReducers({
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers);

export default store;