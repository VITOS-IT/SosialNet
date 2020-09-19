import {usersAPI} from "../api/api";
import {updateOblectInArray} from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGLE_IS_FETCHIMG = 'TOGLE_IS_FETCHIMG';
const TOGLE_IS_FOLLOWING_PROGRESS = 'TOGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReduser = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateOblectInArray(state.users, action.userId, "id", {followed: true})

            }
        case UNFOLLOW:

            return {
                ...state,
                users: updateOblectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGLE_IS_FETCHIMG:
            return {...state, isFetching: action.isFetching}
        case TOGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGLE_IS_FETCHIMG, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page))
        let response = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount))
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unfollowUser.bind(usersAPI);
        await followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess)

    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.followUser.bind(usersAPI);
        await followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)
    }
}

export default usersReduser;