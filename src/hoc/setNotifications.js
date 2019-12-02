import React from 'react';
import {connect} from "react-redux";
import {setNotify} from "../redux/reducers/notifyReducer";


let mapStateToProps = () => {
    return {

    }
};

export const NotificationsHOC = (Component) => {
    class NotificationsComponent extends React.Component {
        render() {
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToProps, {setNotify})(NotificationsComponent);

};