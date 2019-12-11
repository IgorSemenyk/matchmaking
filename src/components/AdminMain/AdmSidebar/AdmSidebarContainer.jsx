import React from 'react';
import AdmSidebar from "./AdmSidebar";
import {logout} from "../../../redux/reducers/authReducer";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = () => {
    return {

    }
};

class AdmSidebarContainer extends React.Component {
    render() {
        return <AdmSidebar logout={this.props.logout} />
    }
}

export default compose(
    connect(mapStateToProps, {logout})
)(AdmSidebarContainer)