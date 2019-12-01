import React from 'react';
import ChatMessages from "./ChatMessages";
import {connect} from "react-redux";
import {getMessagesData, sendMessage} from "../../../../../redux/reducers/chatReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {reduxForm} from "redux-form";

let checkerID = 0;

class ChatMessagesContainer extends React.Component {
    state = {
        chatID: this.props.match.params.companyID
    };
    startChecker = (dialog) => {
        checkerID = setInterval( () => { this.props.getMessagesData(dialog) }, 5000);
        return checkerID;
    };
    stopChecker = () => {
        clearInterval(checkerID);
    };
    changeDialog = (dialog) => {
        if(this.state.chatID !== dialog) {
            this.props.getMessagesData(dialog);
            this.stopChecker();
            this.startChecker(dialog);
            this.setState({
                chatID: dialog
            })
        }
    };
    onSubmit = (formData) => {
        this.props.sendMessage({
            dialog: this.state.chatID,
            setter: this.props.userID,
            message: formData.message
        })
    };
    componentDidMount() {
        this.props.getMessagesData(this.state.chatID);
        this.startChecker(this.state.chatID);
    }
    componentWillUnmount() {
        this.stopChecker()
    }

    render() {
        return <ChatMessagesRedux messages={this.props.messages}
                             sendMessage={this.props.sendMessage}
                             userID={this.props.userID}
                             changeDialog={this.changeDialog}
                             onSubmit={this.onSubmit}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        messages: state.chat.messages,
        userID: state.auth.id
    }
};

let ChatMessagesRedux = reduxForm({form: 'message'})(ChatMessages);

export default compose(
    withRouter,
    connect(mapStateToProps, {getMessagesData, sendMessage}),
)(ChatMessagesContainer);