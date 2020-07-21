import React from "react";
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img alt='something' src={'https://forum.nextrp.ru/data/avatars/o/38/38306.jpg?1582704311'}/>
            {props.message}
            <div>
                <span>Like count {props.likes}</span>
            </div>
        </div>


    )
}
export default Post;