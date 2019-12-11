import React from 'react';
import {connect} from "react-redux";
import AdmDashboard from "./AdmDashboard";

let mapStateToProps = (state) => {
    return {

    }
};

class AdmDashboardContainer extends React.Component {
    render() {
        return <AdmDashboard />
    }
}

export default connect(mapStateToProps)(AdmDashboardContainer);