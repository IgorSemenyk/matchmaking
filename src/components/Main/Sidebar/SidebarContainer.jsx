import React from 'react';
import Sidebar from "./Sidebar";
import {logout} from "../../../redux/reducers/authReducer";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = () => {
    return {

    }
};

class SidebarContainer extends React.Component {
    render() {
        return <Sidebar logout={this.props.logout} />
    }
}

export default compose(
    connect(mapStateToProps, {logout})
)(SidebarContainer)