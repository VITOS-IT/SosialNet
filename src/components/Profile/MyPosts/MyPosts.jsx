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
        <Post message = 'Hi, how are you?' likes = '15'/>
        <Post message = 'It`s my first post' likes = '20'/>
        <Post/>

        </div>


            }
  export default MyPosts;