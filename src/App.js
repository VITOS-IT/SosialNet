import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";

import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialodsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {Route} from "react-router-dom";


const App = (props) => {

    return (

            <div className={'app-wrapper'}>
                <HeaderContainer/>
                {/*<Navbar state={props.store.getState().navBlock}/>*/}
                <Navbar />
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile/:userId?'} render={()=><ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginPage />}/>
                    <Route path={'/news'} component={News}/>
                </div>
            </div>

    );
}


export default App;
