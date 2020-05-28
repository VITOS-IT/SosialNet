import profileReduser from "./profileReduser";
import dialogReduser from "./dialogsReduser";
import navblockReduser from "./navblockReduser";

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

    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogReduser(this._state.dialogsPage, action);
        this._state.navBlock = navblockReduser(this._state.navBlock, action);

        this._callSubscriber(this._state);

    },

    _callSubscriber
        () {
        console.log('aasaasa')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}
export default store;