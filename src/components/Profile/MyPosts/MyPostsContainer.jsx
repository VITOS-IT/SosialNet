import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReduser";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) =>{
    return{
        postsData: state.profilePage.postsData,
        newPostT: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addPost: ()=>{
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (body)=>{
            let action = updateNewPostTextActionCreator(body);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;