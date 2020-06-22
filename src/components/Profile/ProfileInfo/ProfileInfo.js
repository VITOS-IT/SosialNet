import React from "react";
import s from './ProfileInfo.module.css';



const ProfileInfo = (props) => {

    return (
        <div>
            <div>
                <img
                    src={'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'}/>
            </div>
            <div >
                <img src={props.profile.photos.large} className={s.ava}/>
                <div>My name is: {props.profile.fullName}
                <br/>looking for job: {props.profile.lookingForAJob?'no': 'yes'}</div>

            </div>
        </div>
    )
}
export default ProfileInfo;