import React from 'react';
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import Main from "./components/Main/Main";
import {getAuthData} from "./redux/reducers/authReducer";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

function App(props) {
    props.getAuthData();
    return <div className="appWrapper">
        { !props.isAuth ? <LoginContainer /> : <Main/> }
    </div>
}

let ConnectApp = connect(mapStateToProps, {getAuthData})(App);

export default ConnectApp;
