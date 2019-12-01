import React from 'react';
import ChatMessages from "./ChatMessages";
import {connect} from "react-redux";
import {getMessagesData, sendMessage} from "../../../../../redux/reducers/chatReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";



class ChatMessagesContainer extends React.Component {
    componentDidMount() {
        let chatID = this.props.match.params.companyID;
        this.props.getMessagesData(chatID);
        setInterval( () => { this.props.getMessagesData(chatID) }, 5000);
    }

    render() {
        return <ChatMessages messages={this.props.messages} sendMessage={this.props.sendMessage} userID={this.props.userID} />
    }
}

let mapStateToProps = (state) => {
    return {
        messages: state.chat.messages,
        userID: state.auth.id
    }
};


export default compose(
    withRouter,
    connect(mapStateToProps, {getMessagesData, sendMessage}),
)(ChatMessagesContainer);