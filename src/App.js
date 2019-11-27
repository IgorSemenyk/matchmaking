import React from 'react';
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import Main from "./components/Main/Main";
import {getAuthData} from "./redux/reducers/authReducer";
import Preloader from "./components/Preloader/Preloader";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching,
        id: state.auth.id,
        login: state.auth.login,
        password: state.auth.password
    }
};

function App(props) {
    if( props.isFetching === true) {
        props.getAuthData();
            return <Preloader />;
    }
    debugger;
    return <div className="appWrapper">
        { (!props.isAuth ) ? <LoginContainer /> : <Main/> }
    </div>
}

let ConnectApp = connect(mapStateToProps, {getAuthData})(App);

export default ConnectApp;
