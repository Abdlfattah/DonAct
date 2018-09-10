import React from 'react'
import { connect } from 'react-redux'
import DashboardUI from './dashboard_ui'

class Dashboard extends React.Component {
    render() {
        return (
           <DashboardUI/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Dashboard)