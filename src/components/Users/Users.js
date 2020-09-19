import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanget, users, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize}
                   onPageChanget={onPageChanget}/>
        <div>
            {
                users.map(u => <User user={u} follow={props.follow}
                                     followingInProgress={props.followingInProgress}
                                     unfollow={props.unfollow}/>)
            }
        </div>
    </div>

}
export default Users