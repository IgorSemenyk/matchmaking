import React from 'react';
import {connect} from "react-redux";
import AddNotifications from "./AddNotifications";
import {reduxForm} from "redux-form";


let mapStateToProps = (state) => {
    return {

    }
};




class AddNotificationsContainer extends React.Component {
    render() {
        return <AddNotificationForm />
    }
}


const AddNotificationForm = reduxForm({ form: 'notification'})(AddNotifications);


export default connect(mapStateToProps)(AddNotificationsContainer);