import React, { Component } from 'react'
import { connect } from 'react-redux'
import DashboardUI from './dashboard_ui'


class Dashboard extends Component {


  
  render() {
    return (
        
      <DashboardUI {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Dashboard)