import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>

            <img alt='something' src={'https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/make-a-gaming-logo/gaming-logo-maker-for-an-rpg-guild.png'}/>
            <p>#stayhome</p>
            <div className={s.loginBlock}>
                {props.isAuth? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;