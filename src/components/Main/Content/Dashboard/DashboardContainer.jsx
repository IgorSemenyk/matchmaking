import React from 'react';
import Dashboard from "./Dashboard";
import {connect} from "react-redux";
import {setCommon} from "../../../../redux/reducers/commonReducer";


let mapStateToProps = (state) => {
    return {
        counters: state.common.data.counters,
        popularCompany: state.common.data.meetsPopular
    }
};


class DashboardContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return <Dashboard counters={this.props.counters}
                          pupolarCompany={this.props.popularCompany}
        />
    }
}

export default connect(mapStateToProps, {setCommon})(DashboardContainer);