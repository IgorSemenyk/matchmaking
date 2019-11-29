import React from 'react';
import {Route} from "react-router-dom";
import Chat from "./Content/Chat/Chat";
import style from './Main.module.css';
import Dashboard from "./Content/Dashboard/Dashboard";
import ProfileContainer from "./Content/Profile/ProfileContainer";
import CompaniesContainer from "./Content/Companies/CompaniesContainer";
import MeetsContainer from "./Content/Meets/MeetsContainer";
import SidebarContainer from "./Sidebar/SidebarContainer";
import TopbarContainer from "./Topbar/TopbarContainer";
import CompanyContainer from "./Content/Company/CompanyContainer";

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
                <Route path={'/profile'} render={ () => <ProfileContainer /> } />
                <Route path={'/meets'} render={ () => <MeetsContainer /> } />
                <Route path={'/companies'} render={ () => <CompaniesContainer /> } />
                <Route path={'/chat'} render={ () => <Chat /> } />
                <Route path={'/company/:companyID?'} render={ () => <CompanyContainer /> } />
            </div>
        </main>
    )
};

export default Main;