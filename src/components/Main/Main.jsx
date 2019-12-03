import React from 'react';
import {Route} from "react-router-dom";
import style from './Main.module.css';
import Dashboard from "./Content/Dashboard/Dashboard";
import ProfileContainer from "./Content/Profile/ProfileContainer";
import CompaniesContainer from "./Content/Companies/CompaniesContainer";
import MeetsContainer from "./Content/Meets/MeetsContainer";
import SidebarContainer from "./Sidebar/SidebarContainer";
import TopbarContainer from "./Topbar/TopbarContainer";
import CompanyContainer from "./Content/Company/CompanyContainer";
import ChatContainer from "./Content/Chat/ChatContainer";
import ChatMessagesContainer from "./Content/Chat/ChatMessages/ChatMessagesContainer";
import {connect} from "react-redux";
import {getNotify} from "../../redux/reducers/notifyReducer";

let mapStateToProps = () => {
    return {

    }
};

let Main = (props) => {
    props.getNotify();
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
                <Route path={'/chat'} render={ () => <ChatContainer /> } />
                <Route path={'/company/:companyID?'} render={ () => <CompanyContainer /> } />
            </div>
        </main>
    )
};

export default connect(mapStateToProps, {getNotify})(Main);