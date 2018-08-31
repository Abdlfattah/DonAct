import React, { Component } from 'react'
import {connect} from 'react-redux'
import ListDonationUI from './list_donations_ui'
import { getDonations, clearGetDonations } from '../../actions/donation_actions'

class ListDonation extends Component {

  state={
    success:false,
    waiting:false,
    donations:[],
    oppositeRole:this.props.user.auth.role==='donor'?'charity':'donor'
  }

  componentWillMount = () =>{
    this.props.dispatch(getDonations(this.state.oppositeRole))
    this.setState({waiting:true})
  }

  componentWillUnmount = () => this.props.dispatch(clearGetDonations())
  

  componentWillReceiveProps = (nextProps) =>{
    if(nextProps.donation.donations){
      const data = nextProps.donation.donations
      if(data.success){
        this.setState({
          waiting:false,
          donations:data.donations,
          success:true,
          
        })
      }
      else{this.setState({waiting:false})}
    }
  }

  handleForm = data => this.props.dispatch(getDonations(this.state.oppositeRole,data.text,data.type))
  

  render() {
    console.log(this.props.donation)
    return (
      <ListDonationUI 
        {...this.state} 
        {...this.props}
        handleForm={this.handleForm}
      />
    )
  }
}

const mapStateToProps = (state) => {
    return {
        donation: state.donation
    }
}

export default connect(mapStateToProps)(ListDonation)
