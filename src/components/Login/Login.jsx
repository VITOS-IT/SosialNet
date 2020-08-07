import React from "react";
import {Field, reduxForm} from "redux-form";
import {authLogin} from "../../redux/auth-reducer";
import {Input} from "../common/FormsControl/FormsContlos";
import {required} from "../../utils/validators/validators";


const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={'login'}
                       validate={[required]}
                       component={Input}/>
            </div>
         <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       validate={[required]}
                       component={Input}/>
            </div>
         <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> Remember me
            </div>
         <div>
             <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) =>{
    const onSubmit = (formData) =>{

        console.log(formData);
        authLogin(formData.login, formData.password, formData.rememberMe)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}

export default Login