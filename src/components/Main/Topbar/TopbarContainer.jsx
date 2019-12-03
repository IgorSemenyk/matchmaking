import React from 'react';
import Topbar from "./Topbar";
import {compose} from "redux";
import {connect} from "react-redux";
import {updateNotify} from "../../../redux/reducers/notifyReducer";
import {setCommon} from "../../../redux/reducers/commonReducer";

let mapStateToProps = (state) => {
    return {
        expoDate: state.common.expoDate,
        notifications: state.notify.notifications,
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
    componentDidMount() {
        this.props.setCommon();
    }

    render() {
        return <Topbar data={this.props}
                       setNotify={this.setNotifyStatus}
                       notifyStatus={this.state.notificationsOpen}
                       accountListStatus={this.state.accountListStatus}
                       setAccountListStatus={this.setAccountListStatus}
                       updateNotify={this.props.updateNotify}
        />
    }
}



export default compose(
    connect(mapStateToProps, {setCommon, updateNotify})
)(TopbarContainer);