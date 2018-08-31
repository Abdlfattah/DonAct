import React, { Component } from 'react'
import DonationInfoUI from './donation_info_ui'
import { connect } from 'react-redux'
import { getDonation, clearGetDonation } from '../../actions/donation_actions'
import { donate } from '../../actions/user_actions'

class DonationInfo extends Component {

    state = {
        success:false,
        donation:''
    }

    componentWillMount = () => {
        this.props.dispatch(getDonation(this.props.match.params.id))
    }

    componentWillUnmount = () =>{
        this.props.dispatch(clearGetDonation())
    }
    componentWillReceiveProps = (nextProps) =>{
        console.log(nextProps)
        if(nextProps.donation){
            const data = nextProps.donation.donation
            if(data.success){
                this.setState({
                    success:true,
                    donation:data.donation
                })
            }
        }
    }

    handleDonate = donationId =>{this.props.dispatch(donate({donationId,userId:this.props.user.auth._id}))}

    render() {
        console.log(this.state)
        return (
            <DonationInfoUI 
                {...this.state}
                handleDonate={this.handleDonate}
            />
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        donation: state.donation,
        user: state.user
    }
}

export default connect(mapStateToProps)(DonationInfo)