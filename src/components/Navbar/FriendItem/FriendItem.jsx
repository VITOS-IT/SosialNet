import React from "react";
import s from "./../Navbar.module.css";

const FriendItem = (props)=>{
    return(
        <div className={s.friendOne}>
            <img alt='something' className={s.avatar} src={props.avatar}/>
            <h5>{props.name}</h5>
        </div>
    )
}

export default FriendItem