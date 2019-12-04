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
        let categories = JSON.stringify(formData.category);
        let interests = JSON.stringify(formData.interest);
        formData.category = categories;
        formData.interest = interests;
        this.props.updateProfileData(formData);
    };
    render () {
        return <ProfileReduxForm {...this.props} data={this.props.initialValues} onSubmit={this.onSubmit}  />
    }
}

let mapStateToProps = (state) => {
    return {
        initialValues: state.profile.initialValue,
        categories: state.common.data.category,
        interests: state.common.data.interest,
        countries: state.common.data.country
    }
};

let ProfileReduxForm = reduxForm({ form: 'profile', enableReinitialize: true})(Profile)

export default compose(
    connect(mapStateToProps, {getProfileData, updateProfileData}),
)(ProfileContainer);