import React from 'react';
import Chat from "./Chat";
import {compose} from "redux";
import {connect} from "react-redux";
import {getDialogs} from "../../../../redux/reducers/chatReducer";

let mapStateToProps = (state) => {
    return {
        dialogs: state.chat.dialogs
    }
};

class ChatContainer extends React.Component {
    componentDidMount() {
        this.props.getDialogs();
    }
    render() {
        return <Chat dialogs={this.props.dialogs} />
    }
}

export default compose(
    connect(mapStateToProps, { getDialogs })
)(ChatContainer);