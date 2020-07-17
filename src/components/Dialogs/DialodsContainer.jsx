import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReduser";
import Dialogs from "./Dialods";
import {connect} from "react-redux";

import {withAuthredirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthredirect
)(Dialogs)
