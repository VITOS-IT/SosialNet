import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sweta'},
    {id: 4, name: 'Anna'},
    {id: 5, name: 'Den'}];
let messageData = [
    {id:1, message: 'Hi'},
    {id:2, message: 'How are you'},
    {id:3, message: 'yo'},
    {id:4, message: 'yo'},
    {id:5, message: 'yo'}
];
let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'Hi, how are youssss?', likesCount: 20}
];
ReactDOM.render(
    <React.StrictMode>
        <App dialogsData={dialogsData} messageData={messageData} postsData={postsData}/>
    </React.StrictMode>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
