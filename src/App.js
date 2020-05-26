import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialods";
import Route from "react-router-dom/es/Route";

import {BrowserRouter} from "react-router-dom";
import News from "./components/News/News";


const App = (props) => {

    return (

            <div className={'app-wrapper'}>
                <Header/>
                <Navbar state={props.state.navBlock}/>
                {/*<Profile/>*/}
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={()=><Profile state={props.state.profilePage}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesPage}/>}/>
                    <Route path={'/news'} component={News}/>
                </div>
            </div>

    );
}


export default App;
