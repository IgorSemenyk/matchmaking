import React from 'react';
import {connect} from "react-redux";
import style from './AdminMain.module.css'
import AdmSidebarContainer from "./AdmSidebar/AdmSidebarContainer";
import MainSettingsContainer from "./AdmContent/MainSettings/MainSettingsContainer";
import {Route} from "react-router-dom";
import AdmDashboardContainer from "./AdmContent/AdmDashboard/AdmDashboardContainer";
import AddNotificationsContainer from "./AdmContent/AddNotifications/AddNotificationsContainer";
import ChatContainer from "../Main/Content/Chat/ChatContainer";
import AllCompaniesContainer from "./AdmContent/AllCompanies/AllCompaniesContainer";
import AllMeetsContainer from "./AdmContent/AllMeets/AllMeetsContainer";
import Import from "./AdmContent/ImportCompanies/Import";

let mapStateToProps = () => {
    return {

    }
};

class AdminMainContainer extends React.Component {
    render() {
        return <main className={style.mainContainer}>
            <div className={'sidebar'}>
                <AdmSidebarContainer/>
            </div>
            <div className={style.content}>
                <Route path={'/settings'} render={ () => <MainSettingsContainer /> } />
                <Route path={'/dashboard'} render={ () => <AdmDashboardContainer /> } />
                <Route path={'/notify-create'} render={ () => <AddNotificationsContainer/> } />
                <Route path={'/chat'} render={ () => <ChatContainer/>} />
                <Route path={'/all-companies'} render={ () => <AllCompaniesContainer /> }  />
                <Route path={'/all-meets'} render={ () => <AllMeetsContainer/> } />
                <Route path={'/import-data'} render={ () => <Import /> } />
            </div>
        </main>
    }
}

export default connect(mapStateToProps)(AdminMainContainer);