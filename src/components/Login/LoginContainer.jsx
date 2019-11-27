import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {compose} from "redux";
import Main from "../Main/Main";
import {reduxForm} from "redux-form";
import {authAPI} from "../../api/api";
import {setAuthData} from "../../redux/reducers/authReducer";


class LoginContainer extends React.Component {
    onSubmit = (formData) => {
        return authAPI.login(formData.login, formData.password)
            .then( res => {
                if(res.data.statusCode === 1){
                    this.props.setUser(res.data.info.id, res.data.info.login, res.data.info.password);
                } else if(res.data.statusCode === 5) {
                    alert(res.data.mesages);
                }
        });
    };
    render() {
        return <LoginReduxForm onSubmit={this.onSubmit}  />
    }
}

let LoginReduxForm = reduxForm({ form: 'login' })(Login);

let mapStateToProps = (state) => {
    return {

    }
};

let mapDispatchToProps = {
    setUser: setAuthData
};



export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer);