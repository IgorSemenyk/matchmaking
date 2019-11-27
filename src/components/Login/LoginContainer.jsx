import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form";
import {login} from "../../redux/reducers/authReducer";
import style from './Login.module.css';

class LoginContainer extends React.Component {
    onSubmit = (formData) => {
        return this.props.login(formData.login, formData.password);
    };
    render() {
        return <div className={style.loginForm}>
            <LoginReduxForm onSubmit={this.onSubmit}  />
        </div>
    }
}

let LoginReduxForm = reduxForm({ form: 'login' })(Login);

let mapStateToProps = (state) => {
    return {

    }
};

let mapDispatchToProps = {
    login: login
};



export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer);