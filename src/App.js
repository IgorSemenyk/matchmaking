import React from 'react';
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import Main from "./components/Main/Main";
import {getAuthData} from "./redux/reducers/authReducer";
import Preloader from "./components/Preloader/Preloader";
import {getNotify} from "./redux/reducers/notifyReducer";
import AdminMainContainer from "./components/AdminMain/AdminMainContainer";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching,
        id: state.auth.id,
        login: state.auth.login,
        password: state.auth.password,
        type: state.auth.type,
    }
};

function App(props) {
    if( props.isFetching === true) {
        props.getAuthData();
            return <Preloader />;
    }
    return <div className="appWrapper">
        { (!props.isAuth ) ? <LoginContainer /> : props.type === 'a' ? <AdminMainContainer /> : <Main/> }
    </div>
}

let ConnectApp = connect(mapStateToProps, {getAuthData, getNotify})(App);

export default ConnectApp;
