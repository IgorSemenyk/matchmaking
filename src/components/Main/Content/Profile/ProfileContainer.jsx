import React from 'react';
import Profile from "./Profile";
import {compose} from "redux";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";

class ProfileContainer extends React.Component {
    render () {
        return <Profile data={this.props.initialValues} />
    }
}

let mapStateToProps = (state) => {
    return {
        initialValues: state.profile.initialValue,
    }
};



export default compose(
    connect(mapStateToProps),
    reduxForm({ form: 'profile', enableReinitialize: true})
)(ProfileContainer);