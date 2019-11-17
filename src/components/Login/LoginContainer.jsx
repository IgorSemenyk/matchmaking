import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {compose} from "redux";
import Main from "../Main/Main";

class LoginContainer extends React.Component {

    render() {
        return this.props.isAuth ? <Main />  :  <Login />

    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps)
)(LoginContainer);