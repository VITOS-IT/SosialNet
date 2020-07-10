import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReduser";
import Dialogs from "./Dialods";
import {connect} from "react-redux";

import {withAuthredirect} from "../../hoc/withAuthRedirect";



let AuthRedirectComponent = withAuthredirect(Dialogs)


const mapStateToProps = (state) =>{
    return{
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        sendMessage: ()=>{
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body)=>{
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer