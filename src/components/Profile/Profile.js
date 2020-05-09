import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>

            <img
                src={'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'}/>
            <div>
                ava + description
            </div>
            <div className={s.posts}>
                My posts
                <div className={s.item}>
                    new post
                </div>
            </div>
            <div className={s.item}>
                posts
                <div className={s.item}>
                    post1
                </div>
                <div className={s.item}>
                    post2
                </div>
            </div>
        </div>
    )
}
export default Profile;