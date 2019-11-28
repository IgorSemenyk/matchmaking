import React from 'react';
import Profile from "./Profile";
import {compose} from "redux";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {getProfileData, updateProfileData} from "../../../../redux/reducers/profileReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfileData();
    }
    onSubmit = (formData) => {
        this.props.updateProfileData(formData);
    };
    render () {
        return <ProfileReduxForm {...this.props} data={this.props.initialValues} onSubmit={this.onSubmit}  />
    }
}

let mapStateToProps = (state) => {
    return {
        initialValues: state.profile.initialValue,
    }
};

let ProfileReduxForm = reduxForm({ form: 'profile', enableReinitialize: true})(Profile)

export default compose(
    connect(mapStateToProps, {getProfileData, updateProfileData}),
)(ProfileContainer);