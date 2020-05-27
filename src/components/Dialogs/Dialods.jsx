import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialodItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Dialogs = (props) => {
    let messagesElements = props.state.messages.map(mes => <Message message={mes.message}/>);
    let element = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}
                                                           avatar={d.avatar}/>);
    let newMessageBody = props.state.newMessageBody;
    let newMessage = React.createRef();


    let onSendMessageClick = () => {
       props.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }


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