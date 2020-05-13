import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'Hi, how are youssss?', likesCount: 20}
    ]
    let postsElement = postsData.map(p => <Post message={p.message} likes={p.likesCount}/>)

    return <div>

        <div className={s.newPost}>
            <h3>My posts</h3>
            <div><textarea></textarea></div>
            <div>
                <button>Add post</button>
            </div>
        </div>

        <div className={s.item}>
            posts

        </div>
        {postsElement}
        <Post/>

    </div>


}
export default MyPosts;