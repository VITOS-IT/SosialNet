import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialodItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";



const Dialogs = (props) => {
    let messagesElements = props.dialogsPage.messages.map(mes => <Message message={mes.message}/>);
    let element = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}
                                                           avatar={d.avatar}/>);
    let newMessageBody = props.dialogsPage.newMessageBody;
    let newMessage = React.createRef();


    let onSendMessageClick = () => {
       props.sendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    if(!props.isAuth) return <Redirect to='/login'/>;

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {element}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea value={newMessageBody}
                                       onChange={onNewMessageChange}
                                       ref={newMessage}></textarea></div>
                        <div>
                            <button onClick={onSendMessageClick}>Send message</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Dialogs