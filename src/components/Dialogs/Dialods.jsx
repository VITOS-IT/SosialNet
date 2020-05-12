import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = () =>{
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/1'} activeClassName = {s.active}>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'} activeClassName = {s.active}>Anna</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'} activeClassName = {s.active}>Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'} activeClassName = {s.active}>Kolya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/5'} activeClassName = {s.active}>Den</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Some message</div>

            </div>

        </div>
    )
}
export default Dialogs