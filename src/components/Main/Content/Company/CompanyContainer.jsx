import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getCompanyData} from "../../../../redux/reducers/profileReducer";
import Company from "./Company";

let mapStateToProps = (state) => {
    return {
        company: state.profile.company
    }
};

class CompanyContainer extends React.Component {
    componentDidMount() {
        let companyID = this.props.match.params.companyID;
        this.props.getCompanyData(companyID);
    }
    render() {
        return <Company company={this.props.company} />
    }
}

export default compose(
    connect(mapStateToProps, {getCompanyData}),
    withRouter
)(CompanyContainer);