import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogsReduser";
import navblockReducer from "./navblockReduser";
import profileReducer from "./profileReduser";
import usersReduser from "./usersReduser";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    navBlock: navblockReducer,
    usersPage: usersReduser,
    auth: authReducer
});
let store = createStore(reducers);

window.store = store;

export default store;