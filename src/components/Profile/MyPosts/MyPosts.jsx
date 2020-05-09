import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return    <div>
            My posts
            <div>
                new post
            </div>

            <div className={s.item}>
                posts

            </div>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>

        </div>


            }
  export default MyPosts;