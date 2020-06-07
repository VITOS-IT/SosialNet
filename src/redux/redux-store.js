import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogsReduser";
import navblockReducer from "./navblockReduser";
import profileReducer from "./profileReduser";
import usersReduser from "./usersReduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    navBlock: navblockReducer,
    usersPage: usersReduser
});
let store = createStore(reducers);

export default store;