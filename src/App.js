import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Route from "react-router-dom/es/Route";

import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialodsContainer";


const App = (props) => {

    return (

            <div className={'app-wrapper'}>
                <Header/>
                <Navbar state={props.store.getState().navBlock}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={()=><Profile store={props.store}/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path={'/news'} component={News}/>
                </div>
            </div>

    );
}


export default App;
