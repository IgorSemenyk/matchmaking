import React from 'react';
import ChatMessages from "./ChatMessages";
import {connect} from "react-redux";
import {getMessagesData} from "../../../../../redux/reducers/chatReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";



class ChatMessagesContainer extends React.Component {
    componentDidMount() {
        let chatID = this.props.match.params.companyID;
        this.props.getMessagesData(chatID);
    }

    render() {
        return <ChatMessages messages={this.props.messages} />
    }
}

let mapStateToProps = (state) => {
    return {
        messages: state.chat.messages,
    }
};


export default compose(
    withRouter,
    connect(mapStateToProps, {getMessagesData}),
)(ChatMessagesContainer);