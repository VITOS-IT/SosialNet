import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReduser";


const MyPosts = (props) => {



    let postsElement = props.postsData.map(p => <Post message={p.message} likes={p.likesCount}/>);

    let newPostElement = React.createRef();
    let addPost = () =>{
        // props.addPost();
        props.dispatch(addPostActionCreator());

    };

    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
        // props.updateNewPostText(text);
        console.log(text);
    }
    return <div>

        <div className={s.newPost}>
            <h3>My posts</h3>
            <div><textarea ref={newPostElement} value={props.newPostT} onChange={onPostChange}/></div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>

        <div className={s.item}>
            posts

        </div>
        {postsElement}



    </div>


}
export default MyPosts;