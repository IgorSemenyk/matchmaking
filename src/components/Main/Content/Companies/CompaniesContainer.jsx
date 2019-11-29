import React from 'react';
import Companies from "./Companies";
import {compose} from "redux";
import {connect} from "react-redux";
import {getCompaniesData} from "../../../../redux/reducers/companiesReducer";
import {setNewMeet} from "../../../../redux/reducers/meetsReducer";

class CompaniesContainer extends React.Component {
    state = {
        startDate: new Date()
    };
    handleChange = (date) => {
        this.setState({
            startDate: date
        })
    };
    componentDidMount() {
        this.props.getCompaniesData();
    }
    setMeet = (companyID, stand) => {
        let newMeet = {
            bid: companyID,
            cid: this.props.userID,
            stand: stand,
            date: '2019-11-30',
            time: '19:00',
            status: 1
        };

        this.props.userType === 'b' ? newMeet.bid = this.props.userID : newMeet.bid = companyID;

        this.props.setNewMeet(newMeet);

    };
    render() {
        return <Companies companies={this.props} setMeet={this.setMeet} handleChange={this.handleChange} startDate={this.state.startDate} />
    }
}

let mapStateToProps = (state) => {
    return{
        items: state.companies.items,
        userID: state.auth.id,
        userType: state.auth.type
    }

};

export default compose(
    connect(mapStateToProps, {getCompaniesData, setNewMeet})
)(CompaniesContainer);