import React from 'react'
import {Field, reduxForm} from "redux-form";


const LoginForm = () => {
    return(
        <form>
            <div>
                <Field component={'input'} name={'email'} placeholder={'Write your email'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} type={'password'} placeholder={'Password'} />
            </div>
            <div>
                <Field component={'input'} name={'remember'} type={'checkbox'}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)


class Login extends React.Component {
    render() {
        return(
            <div>
                 <ReduxLoginForm />
            </div>
        )
    }


}

export default Login;