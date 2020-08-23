// import React from "react";
import {addPostActionCreator} from "../../../redux/profileReduser";
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
        addPost: (newPostText)=>{
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;