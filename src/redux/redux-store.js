import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogsReduser";
import navblockReducer from "./navblockReduser";
import profileReducer from "./profileReduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    navBlock: navblockReducer
});
let store = createStore(reducers);

export default store;