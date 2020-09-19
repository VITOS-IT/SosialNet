import React from "react";
import {reduxForm} from "redux-form";
import {login} from "../../redux/auth-reducer";
import {createField, Input} from "../common/FormsControl/FormsContlos";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControl/FormsContlos.module.css"

const LoginForm = ({handleSubmit, error}) =>{
    return (
        <form onSubmit={handleSubmit}>
            {createField('email', 'email',[required], Input)}
            {createField('Password', 'password',[required], Input, {type: ""})}
            {createField(null, 'rememberMe',[required], 'input' , {type: "checkbox"}, "Remember me")}

            {error && <div className={style.formSummaryError}>
                {error}
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