import React from "react";
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = (props) => {

    return (
        <div>
            <div>
                <img className={s.content}
                    alt='something'
                    src={'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'}/>
            </div>


            <div >
                <img alt='something' src={props.profile.photos.large} className={s.ava}/>

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div>My name is: {props.profile.fullName}
                <br/>looking for job: {props.profile.lookingForAJob?'yes': 'no'}</div>

            </div>
        </div>
    )
}
export default ProfileInfo;