import React from 'react';
import Companies from "./Companies";
import {compose} from "redux";
import {connect} from "react-redux";

class CompaniesContainer extends React.Component {
    render() {
        return <Companies companies={this.props} />
    }
}

let mapStateToProps = (state) => {
    return{
        items: state.companies.items
    }

};

export default compose(
    connect(mapStateToProps)
)(CompaniesContainer);