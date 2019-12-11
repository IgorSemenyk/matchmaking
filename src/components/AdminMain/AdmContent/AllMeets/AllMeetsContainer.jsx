import React from 'react';
import {connect} from "react-redux";
import {cancelMeetData, getMeetsData} from "../../../../redux/reducers/meetsReducer";
import AllMeets from "./AllMeets";

let mapStateToProps = (state) => {
    return {
        meets: state.meets.meets,
        userID: state.auth.id,
        type: state.auth.type
    }
};

class AllMeetsContainer extends React.Component {
    componentDidMount() {
        this.props.getMeetsData(this);
    }
    render() {
        return <AllMeets meets={this.props.meets} cancelMeet={this.props.cancelMeetData}/>
    }
}

export default connect(mapStateToProps, { getMeetsData, cancelMeetData })(AllMeetsContainer);