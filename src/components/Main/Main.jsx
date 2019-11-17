import React from 'react';
import Topbar from "./Topbar/Topbar";
import Sidebar from "./Sidebar/Sidebar";
import {Route} from "react-router-dom";
import Profile from "./Content/Profile/Profile";
import Meets from "./Content/Meets/Meets";
import Companies from "./Content/Companies/Companies";
import Chat from "./Content/Chat/Chat";

let Main = () => {
    return(
        <main>
            <header>
                <Topbar/>
            </header>
            <div className={'sidebar'}>
                <Sidebar/>
            </div>
            <div className={'content'}>
                <Route path={'/profile/:companyID?'} render={ () => <Profile /> } />
                <Route path={'/meets'} render={ () => <Meets /> } />
                <Route path={'/companies'} render={ () => <Companies /> } />
                <Route path={'/chat'} render={ () => <Chat /> } />
            </div>
        </main>
    )
};

export default Main;