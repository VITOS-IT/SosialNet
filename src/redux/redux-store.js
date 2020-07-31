import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./dialogsReduser";
import navblockReducer from "./navblockReduser";
import profileReducer from "./profileReduser";
import usersReduser from "./usersReduser";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import { Form, Field } from 'react-final-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    navBlock: navblockReducer,
    usersPage: usersReduser,
    auth: authReducer,
    form: formReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;