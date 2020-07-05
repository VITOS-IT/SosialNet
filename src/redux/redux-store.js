import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./dialogsReduser";
import navblockReducer from "./navblockReduser";
import profileReducer from "./profileReduser";
import usersReduser from "./usersReduser";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    navBlock: navblockReducer,
    usersPage: usersReduser,
    auth: authReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;