import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Route from "react-router-dom/es/Route";

import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialodsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {

    return (

            <div className={'app-wrapper'}>
                <Header/>
                {/*<Navbar state={props.store.getState().navBlock}/>*/}
                <Navbar />
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={()=><Profile/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path={'/news'} component={News}/>
                </div>
            </div>

    );
}


export default App;
