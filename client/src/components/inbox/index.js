import React, { Component } from 'react'
import InboxUI from './inbox_ui'
import { connect } from 'react-redux'

class Inbox extends Component {
  render() {
    return (
      <div>
        <InboxUI/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}
export default connect(mapStateToProps)(Inbox)
