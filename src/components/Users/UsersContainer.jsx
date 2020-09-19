import React from "react";
import {connect} from "react-redux";
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress, unfollow

} from "../../redux/usersReduser";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize}=this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanget = (pageNumber) => {
        const {pageSize}=this.props
        this.props.getUsers(pageNumber, pageSize);

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanget={this.onPageChanget}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers: requestUsers
    })(UsersContainer);