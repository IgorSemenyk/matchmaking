import React from 'react';
import Companies from "./Companies";
import {compose} from "redux";
import {connect} from "react-redux";
import {getCompaniesData} from "../../../../redux/reducers/companiesReducer";
import {setNewMeet} from "../../../../redux/reducers/meetsReducer";
import differenceInCalendarISOYears from 'date-fns/differenceInCalendarISOYears'

class CompaniesContainer extends React.Component {
    state = {
        newMeetContainerOpen: false,
        startDate: new Date(),
        startTime: null,
        newMeetCompany: null,
        newMeetState: null
    };
    componentDidMount() {
        this.props.getCompaniesData();
    }

    handleChange = (date) => {
        console.log(date);
        this.setState({
            startDate: parseISO(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay()),
            startTime: date.getHours()
        });
        console.log(date)
    };

    setNewMeetData = (companyID, stand) => {
        this.setState({
            newMeetCompany: companyID,
            newMeetState: stand,
            newMeetContainerOpen: true,
        });
    };
    setMeet = () => {
        debugger;
        this.setState({
            newMeetContainerOpen: false
        });
        let newMeet = {
            bid: this.state.newMeetCompany,
            cid: this.props.userID,
            stand: this.state.newMeetState,
            date: this.state.startDate,
            time: this.state.startTime,
            status: 1
        };
        if (this.props.userType === 'b') {
            newMeet.bid = this.props.userID;
            newMeet.cid =  this.state.newMeetCompany;
        }
        this.props.setNewMeet(newMeet);
    };

    render() {
        return <Companies companies={this.props}
                          setMeet={this.setMeet}
                          handleChange={this.handleChange}
                          startDate={this.state.startDate}
                          handleCalendarClose={this.handleCalendarClose}
                          setNewMeetData={this.setNewMeetData}
                          isOpen={this.state.newMeetContainerOpen}
                          cancelMeet={this.props.cancelMeetData}
        />
    }
}

let mapStateToProps = (state) => {
    debugger;
    return{
        items: state.companies.items,
        userID: state.auth.id,
        userType: state.auth.type
    }

};

export default compose(
    connect(mapStateToProps, {getCompaniesData, setNewMeet})
)(CompaniesContainer);