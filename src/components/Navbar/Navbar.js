import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from './FriendItem/FriendItem'


const Navbar = (props) => {
    let friend = props.state.friendItem.map(f  =><Friends avatar={f.avatar} name={f.name}/>);

    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink></div>
            <div className={`${s.item} `}><NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.item}><NavLink to={'/news'} activeClassName={s.active}>News</NavLink></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Setings</a></div>
            <div className={s.item}>
                <h2>Friends</h2>
                <div className={s.friendBlock}>
                    {friend}
                </div>
            </div>
        </nav>
    )
}
export default Navbar;