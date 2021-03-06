import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialodItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsContlos";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const maxLength20 = maxLengthCreator(20);
const Dialogs = (props) => {
    let messagesElements = props.dialogsPage.messages.map(mes => <Message message={mes.message}/>);
    let element = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}
                                                           avatar={d.avatar}/>);

    let addNewMessage = (values) => {
       props.sendMessage(values.newMessageBody)
    }


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {element}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                </div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}

const AddMessageForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={"newMessageBody"}
                       validate={[required, maxLength20]}
                       placeholder="Enter your3 message" />
               </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs