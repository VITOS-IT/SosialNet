import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src={'https://forum.nextrp.ru/data/avatars/o/38/38306.jpg?1582704311'}/>
            post1
            <div>
                <span>Like</span>
            </div>
        </div>


)
}
export default Post;