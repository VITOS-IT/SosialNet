const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'}],
    dialogs: [
        {id: 1, name: 'Dimych', avatar: 'https://download-cs.net/steam/avatars/3412.jpg'},
        {id: 2, name: 'Andrew', avatar: 'https://download-cs.net/steam/avatars/3412.jpg'},
        {id: 3, name: 'Sweta', avatar: 'https://download-cs.net/steam/avatars/3412.jpg'},
        {id: 4, name: 'Anna', avatar: 'https://download-cs.net/steam/avatars/3412.jpg'},
        {id: 5, name: 'Den', avatar: 'https://download-cs.net/steam/avatars/3412.jpg'}]
};

const dialogReduser = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = {
                message: action.newMessageBody,
                id: state.messages.length + 1
            };
            return {
                ...state,
                messages: [...state.messages, body]
            };
        }

        default:
            return state;
    }

}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogReduser;