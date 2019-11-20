import React from 'react'
import {Field} from "redux-form";


const LoginForm = () => {
    return(
        <form>
            <div>
                <Field component={'input'} name={'email'} placeholder={'Write your email'}/>
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