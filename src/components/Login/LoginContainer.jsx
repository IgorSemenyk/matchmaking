import React from 'react';
import LoginForm from "./Login";
import {connect} from "react-redux";
import {compose} from "redux";
import Main from "../Main/Main";
import {reduxForm} from "redux-form";

class LoginContainer extends React.Component {

    render() {
        return this.props.isAuth ? <Main />  :  <LoginForm />

    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default compose(
    reduxForm({ form: 'login' }),
    connect(mapStateToProps),
)(LoginContainer);