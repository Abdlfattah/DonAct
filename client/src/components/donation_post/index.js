import React, { Component } from 'react'
import DonationPostUI from './donation_post_ui'
import { connect } from 'react-redux'
 
class DonationPost extends Component {
  render() {
    return (
      <div>
        <DonationPostUI/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        donation: state.donation
    }
}

export default connect(mapStateToProps)(DonationPost)
