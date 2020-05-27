const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";


let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'Hi, how are youssss?', likesCount: 20}],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
                {id: 5, name: 'Den', avatar: 'https://download-cs.net/steam/avatars/3412.jpg'}],
            newMessageBody: ''
        },
        navBlock: {
            friendItem: [
                {id: 1, name: 'Dimych', avatar: 'https://download-cs.net/steam/avatars/3412.jpg'},
                {id: 2, name: 'Andrew', avatar: 'https://download-cs.net/steam/avatars/3412.jpg'},
                {id: 3, name: 'Sweta', avatar: 'https://download-cs.net/steam/avatars/3412.jpg'}
            ]
        }
    },

    rerenderEntireTree() {
        console.log('state changed');
    },

    dispatch(action) {
        if (action.type === "GET-STATE") {
            return this._state;
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = {
                message: this._state.dialogsPage.newMessageBody,
                id: this._state.dialogsPage.messages.length + 1
            };
            this._state.dialogsPage.messages.push(body);
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        }
    },

    _callSubscriber
        () {
        console.log('aasaasa')
    }
    ,

    subscribe(observer) {
        this._callSubscriber = observer;
    }
    ,

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: text
    }
}
export default store;