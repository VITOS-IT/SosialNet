import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) =>{
    return(
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName = {s.active}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) =>{
    return  <div className={s.message}>{props.message}</div>
}

let  dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sweta'},
    {id: 4, name: 'Anna'},
    {id: 5, name: 'Den'}];

let messageData = [
    {id:1, message: 'Hi'},
    {id:2, message: 'How are you'},
    {id:3, message: 'yo'},
    {id:4, message: 'yo'},
    {id:5, message: 'yo'}
]

let element = dialogsData.map(d => <DialogItem name ={d.name} id = {d.id}/> );
let messagesElements = messageData.map(mes => <Message message = {mes.message}/>)


const Dialogs = () =>{
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {element}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    )
}
export default Dialogs