import React from 'react';
import Topbar from "./Topbar";
import {compose} from "redux";
import {connect} from "react-redux";
import {readNotification} from "../../../redux/reducers/commonReducer";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        expoDate: state.common.expoDate,
        notifications: state.common.notifications,
        lang: state.common.lang
    }
};

class TopbarContainer extends React.Component {
    state = {
        notificationsOpen: false,
        accountListStatus: false
    };
    setNotifyStatus = (status) => {
        this.setState({
            notificationsOpen: status
        });
    };
    setAccountListStatus = (status) => {
        this.setState({
            accountListStatus: status
        })
    };
    render() {
        return <Topbar data={this.props}
                       setNotify={this.setNotifyStatus}
                       notifyStatus={this.state.notificationsOpen}
                       accountListStatus={this.state.accountListStatus}
                       setAccountListStatus={this.setAccountListStatus}
                       readNotify={this.props.readNotification}
        />
    }
}



export default compose(
    connect(mapStateToProps, {readNotification})
)(TopbarContainer);