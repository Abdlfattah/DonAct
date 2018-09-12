import React, { Component } from 'react'
import DonationPostUI from './donation_post_ui'
import { connect } from 'react-redux'
import { getDonation, update } from '../../actions/donation_actions'

class DonationPost extends Component {

  state={
    success:false,
    donation:[],
    oppositeRole:this.props.currentUser.role==='donor'?'charity':'donor',
    role:this.props.currentUser.role,
    watiting:false
  }

  componentWillMount = () =>{
    this.props.dispatch(getDonation(this.props.match.params.id,this.props.currentUser._id))
    this.setState({waiting:true})
  }

  updateStatus = () =>{
    this.setState({waiting:true})
    this.props.dispatch(update(this.props.match.params.id,{status:this.state.donation.status+1}))
    this.props.dispatch(getDonation(this.props.match.params.id,this.props.currentUser._id))
  }

  componentWillReceiveProps = (nextprops)=>{
    if(nextprops.donation.donation){
      const data = nextprops.donation.donation
      if(data.success){
        this.setState({
          success:true,
          donation:data.donation,
          waiting:false
        })
      }
    }
    if(nextprops.donation.update){
      if(nextprops.donation.update.success){
        this.setState({waiting:false})
      }
    }
  }


  render() {
    console.log(this.state)
    return (
      <div>
          {this.state.donation.length!==0?
            <DonationPostUI {...this.state} updateStatus={this.updateStatus}/>

            :<div></div>
          }
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
