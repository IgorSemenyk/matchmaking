import React from 'react';
import Topbar from "./Topbar/Topbar";
import Sidebar from "./Sidebar/Sidebar";
import {Route} from "react-router-dom";
import Meets from "./Content/Meets/Meets";
import Chat from "./Content/Chat/Chat";
import style from './Main.module.css';
import Dashboard from "./Content/Dashboard/Dashboard";
import ProfileContainer from "./Content/Profile/ProfileContainer";
import CompaniesContainer from "./Content/Companies/CompaniesContainer";

let Main = () => {
    return(
        <main className={style.mainContainer}>
            <header>
                <Topbar/>
            </header>
            <div className={'sidebar'}>
                <Sidebar/>
            </div>
            <div className={style.content}>
                <Route path={'/dashboard'} render={ () => <Dashboard /> } />
                <Route path={'/profile/:companyID?'} render={ () => <ProfileContainer /> } />
                <Route path={'/meets'} render={ () => <Meets /> } />
                <Route path={'/companies'} render={ () => <CompaniesContainer /> } />
                <Route path={'/chat'} render={ () => <Chat /> } />
            </div>
        </main>
    )
};

export default Main;