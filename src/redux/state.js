let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'Hi, how are youssss?', likesCount: 20}],
            newPostText: 'it-kamasutra.com'
        },
        messagesPage: {
            messageData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'yo'},
                {id: 4, message: 'yo'},
                {id: 5, message: 'yo'}],
            dialogsData: [
                {id: 1, name: 'Dimych', avatar: 'https://download-cs.net/steam/avatars/3412.jpg'},
                {id: 2, name: 'Andrew', avatar: 'https://download-cs.net/steam/avatars/3412.jpg'},
                {id: 3, name: 'Sweta', avatar: 'https://download-cs.net/steam/avatars/3412.jpg'},
                {id: 4, name: 'Anna', avatar: 'https://download-cs.net/steam/avatars/3412.jpg'},
                {id: 5, name: 'Den', avatar: 'https://download-cs.net/steam/avatars/3412.jpg'}]
        },
        navBlock: {
            friendItem: [
                {id: 1, name: 'Dimych', avatar: 'https://download-cs.net/steam/avatars/3412.jpg'},
                {id: 2, name: 'Andrew', avatar: 'https://download-cs.net/steam/avatars/3412.jpg'},
                {id: 3, name: 'Sweta', avatar: 'https://download-cs.net/steam/avatars/3412.jpg'}
            ]
        }
    },

    rerenderEntireTree(){
        console.log('state changed');
    },

    dispatch(action){
      if (action.type === "GET-STATE"){
          return this._state;
      } else if (action.type === "UPDATE-NEW-POST-TEXT"){
          this._state.profilePage.newPostText = action.newText;
          this._callSubscriber();
      }else if (action.type === "ADD-POST"){
          let newPost = {
              id: 5,
              message: this._state.profilePage.newPostText,
              likesCount: 0
          }
          this._state.profilePage.postsData.push(newPost);
          this._state.profilePage.newPostText = '';
          this._callSubscriber();
      }
    },
    // addPost() {
    //
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.postsData.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber();
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber();
    // },
    // getState() {
    //     return this._state;
    // },
    _callSubscriber(){
        console.log('aasaasa')
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },



}
export default store;