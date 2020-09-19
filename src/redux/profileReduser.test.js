import React from "react";
import profileReduser, {addPostActionCreator, deletePost} from "./profileReduser";



let state = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'Hi, how are youssss?', likesCount: 20},
        {id: 3, message: 'Hi, how are you 333?', likesCount: 20},
        {id: 4, message: 'Hi, how are you 4444?', likesCount: 20}]
};


it('length of post should be incement', () => {
    let action = addPostActionCreator("it-vitos.com")
    let newState = profileReduser(state,action)
    expect(newState.postsData.length).toBe(5);
});

it('message of new post post should be correct', () => {
    let action = addPostActionCreator("it-vitos.com")
    let newState = profileReduser(state,action)
    expect(newState.postsData[4].message).toBe("it-vitos.com");
});

it('after deleting length of message should be decrement', () =>{
    let action = deletePost(1);
    let newState = profileReduser(state, action);

    expect(newState.postsData.length).toBe(3)
})
it("after deleting length of message shouldn't change if Id incorrect", () =>{
    let action = deletePost(1000);
    let newState = profileReduser(state, action);

    expect(newState.postsData.length).toBe(4)
})
