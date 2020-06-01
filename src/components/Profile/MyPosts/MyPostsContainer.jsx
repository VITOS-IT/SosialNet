import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReduser";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () =>{
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (body)=>{
        let action = updateNewPostTextActionCreator(body);
        props.store.dispatch(action);
    };

    return <MyPosts addPost={addPost} updateNewPostText={onPostChange}
                    postsData={state.profilePage.postsData}
                    newPostT={state.profilePage.newPostText}/>

}
export default MyPostsContainer;