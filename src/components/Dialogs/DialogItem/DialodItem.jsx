import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) =>{
    return(
        <div className={s.dialog}>
            <img src={props.avatar}/>
            {/*<img src={'https://download-cs.net/steam/avatars/3412.jpg'}/>*/}
            <NavLink to={`/dialogs/${props.id}`} activeClassName = {s.active}>{props.name}</NavLink>
        </div>
    )
}




export default DialogItem