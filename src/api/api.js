import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        "API-KEY" : '2a3b6361-7a2b-407a-a076-d17f7c8d9e32'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    unfollowUser(id){
       return instance.delete(`follow/${id}`)
           .then(response => response.data);
    },
    followUser(id){
        return instance.post(`follow/${id}`,{})
            .then(response => response.data)
    },
    getProfile(userId){
        return instance.get('profile/' + userId)
            .then(response => {
                return response.data
            });
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }

}

