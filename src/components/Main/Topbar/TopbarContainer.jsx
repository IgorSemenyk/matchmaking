import React from 'react';
import Topbar from "./Topbar";
import {compose} from "redux";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        expoDate: state.common.expoDate,
        notifications: state.common.notifications,
        lang: state.common.lang
    }
};

class TopbarContainer extends React.Component {
    state = {
        notificationsOpen: false
    };
    setNotifyStatus = (status) => {
        this.setState({
            notificationsOpen: status
        });
    };
    render() {
        return <Topbar data={this.props} setNotify={this.setNotifyStatus} notifyStatus={this.state.notificationsOpen}  />
    }
}



export default compose(
    connect(mapStateToProps)
)(TopbarContainer);