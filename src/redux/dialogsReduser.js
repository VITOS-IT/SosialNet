const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";


const dialogReduser = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = {
                message: state.newMessageBody,
                id: state.messages.length + 1
            };
            state.messages.push(body);
            state.newMessageBody = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default: return state;
    }

}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: text
    }
}
export default dialogReduser;