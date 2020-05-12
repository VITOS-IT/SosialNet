import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialods";
import Route from "react-router-dom/es/Route";
import {BrowserRouter} from "react-router-dom";
import News from "./components/News/News";


const App = () => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                {/*<Profile/>*/}
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path={'/news'} component={News}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
