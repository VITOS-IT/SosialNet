import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialodItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let messagesElements = props.state.messageData.map(mes => <Message message={mes.message}/>);
    let element = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}
                                                               avatar={d.avatar}/>);
    let newMessage = React.createRef();
    let addMessage = () =>{
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {element}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div><textarea ref={newMessage}></textarea></div>
                    <div>
                        <button onClick={addMessage}>Send message</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Dialogs