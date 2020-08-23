import React from "react";
import {Field, reduxForm} from "redux-form";
import {login} from "../../redux/auth-reducer";
import {Input} from "../common/FormsControl/FormsContlos";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControl/FormsContlos.module.css"

const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'}
                       name={'email'}
                       validate={[required]}
                       component={Input}/>
            </div>
         <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       // type={'password'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> Remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
             <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) =>{
    const onSubmit = (formData) =>{

        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth){
        return <Redirect to={"/profile"}/>;
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{login} )(Login)