import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialodItem";
import Message from "./Message/Message";


const Dialogs = (props) =>{
    let messagesElements = props.state.messageData.map(mes => <Message message = {mes.message}/>);
    let element = props.state.dialogsData.map(d => <DialogItem name ={d.name} id = {d.id}
                                                                avatar={d.avatar}/> );
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