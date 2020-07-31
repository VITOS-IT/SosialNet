import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE ='SET_USER_PROFILE';
const SET_STATUS ='SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'Hi, how are youssss?', likesCount: 20}],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ''
};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
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

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE , profile})
export const setStatus = (status) => ({type: SET_STATUS , status})

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

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}



export default profileReduser;
