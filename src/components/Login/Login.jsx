import React from 'react'
import {Field} from "redux-form";


const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <h1>Login</h1>
            </div>
            <div>
                <Field component={'input'} name={'login'} placeholder={'Write your email'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} type={'password'} placeholder={'Password'} value={'dddddd'}/>
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




export default LoginForm;