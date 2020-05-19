import {rerenderEntireTree} from "../render";

let state = {
    profilePage:{
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'Hi, how are youssss?', likesCount: 20}],

    },
    messagesPage:{
        messageData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'yo'},
            {id: 4, message: 'yo'},
            {id: 5, message: 'yo'}],
        dialogsData: [
            {id: 1, name: 'Dimych', avatar:'https://download-cs.net/steam/avatars/3412.jpg'},
            {id: 2, name: 'Andrew', avatar:'https://download-cs.net/steam/avatars/3412.jpg'},
            {id: 3, name: 'Sweta', avatar:'https://download-cs.net/steam/avatars/3412.jpg'},
            {id: 4, name: 'Anna', avatar:'https://download-cs.net/steam/avatars/3412.jpg'},
            {id: 5, name: 'Den', avatar:'https://download-cs.net/steam/avatars/3412.jpg'}]
    },
    navBlock:{
        friendItem:[
            {id: 1, name: 'Dimych', avatar:'https://download-cs.net/steam/avatars/3412.jpg'},
            {id: 2, name: 'Andrew', avatar:'https://download-cs.net/steam/avatars/3412.jpg'},
            {id: 3, name: 'Sweta', avatar:'https://download-cs.net/steam/avatars/3412.jpg'}
        ]
    }


};

export let addPost=(postMessage)=>{
    let newPost={
        id:5,
        message:postMessage,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}
export default state