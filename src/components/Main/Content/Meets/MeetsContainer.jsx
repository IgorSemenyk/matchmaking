import React from 'react';
import Meets from "./Meets";
import {connect} from "react-redux";
import {cancelMeetData, getMeetsData} from "../../../../redux/reducers/meetsReducer";

let mapStateToProps = (state) => {
    return {
        meets: state.meets.meets,
        userID: state.auth.id,
        type: state.auth.type
    }
};

class MeetsContainer extends React.Component {
    componentDidMount() {
        this.props.getMeetsData(this);
    }
    render() {
        return <Meets meets={this.props.meets} cancelMeet={this.props.cancelMeetData}/>
    }
}

export default connect(mapStateToProps, { getMeetsData, cancelMeetData })(MeetsContainer);