import React from 'react';
import {connect} from "react-redux";
import MainSettings from "./MainSettings";
import {reduxForm} from "redux-form";

let mapStateToProps = (state) => {
    return {

    }
};

class MainSettingsContainer extends React.Component {
    render() {
        return <MainSettingRedux />
    }
}

const MainSettingRedux = reduxForm({ form: 'main'})(MainSettings);



export default connect(mapStateToProps)(MainSettingsContainer);