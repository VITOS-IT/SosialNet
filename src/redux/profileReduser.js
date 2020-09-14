import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE ='SET_USER_PROFILE';
const SET_STATUS ='SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'Hi, how are youssss?', likesCount: 20}],
    profile: null,
    status: ''
};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        }
        case DELETE_POST:{
            return {...state, postsData: state.postsData.filter(p => p.id != action.postId)}
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE , profile})
export const setStatus = (status) => ({type: SET_STATUS , status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

//sanki dalshe
export const getUserProfile =(userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response));

        });
}

export const getStatus = (userId)=> (dispath) =>{
    profileAPI.getStatus(userId).then(response =>{

        dispath(setStatus(response.data));
    });
}
export const updateStatus = (status)=> (dispath) =>{
    profileAPI.updateStatus(status).then(response =>{
        if (response.data.resultCode === 0) {
            dispath(setStatus(status));
        }
    });
}



export default profileReduser;
