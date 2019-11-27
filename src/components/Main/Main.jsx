import React from 'react';
import Topbar from "./Topbar/Topbar";
import Sidebar from "./Sidebar/Sidebar";
import {Route} from "react-router-dom";
import Chat from "./Content/Chat/Chat";
import style from './Main.module.css';
import Dashboard from "./Content/Dashboard/Dashboard";
import ProfileContainer from "./Content/Profile/ProfileContainer";
import CompaniesContainer from "./Content/Companies/CompaniesContainer";
import MeetsContainer from "./Content/Meets/MeetsContainer";
import SidebarContainer from "./Sidebar/SidebarContainer";
import TopbarContainer from "./Topbar/TopbarContainer";

let
    Main = () => {
    return(
        <main className={style.mainContainer}>
            <header>
                <TopbarContainer/>
            </header>
            <div className={'sidebar'}>
                <SidebarContainer/>
            </div>
            <div className={style.content}>
                <Route path={'/dashboard'} render={ () => <Dashboard /> } />
                <Route path={'/profile/:companyID?'} render={ () => <ProfileContainer /> } />
                <Route path={'/meets'} render={ () => <MeetsContainer /> } />
                <Route path={'/companies'} render={ () => <CompaniesContainer /> } />
                <Route path={'/chat'} render={ () => <Chat /> } />
            </div>
        </main>
    )
};

export default Main;