import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResendConfirmationUI from './resend_confirmation_ui'
import { resendConfirmation, clearResendConfirmation } from '../../actions/user_actions'


class ResendConfirmation extends Component {

    state={
        waiting:false,
        msg:'',
        success:false,
        modalOpen:false,
        type:''
    }

    handleForm = (data) => {
        this.props.dispatch(resendConfirmation(data))
        this.setState({waiting:true})
    }

    handleModal = () =>{
        this.setState({ modalOpen: false })
    }

    componentWillReceiveProps = (nextProps) => {
      if(nextProps.user.resend_confirmation){
          const data = nextProps.user.resend_confirmation
          if(data.success){
            this.setState({
                waiting:false,
                msg:data.msg,
                success:true,
                modalOpen:true
            })
          }
          else{
            this.setState({
                waiting:false,
                msg:data.type==='internal-err'?'Something wrong happed':data.msg,
                success:false,
                modalOpen:true,
                type:data.type
            })
          }
        this.props.dispatch(clearResendConfirmation())
      }
    }
    

    render() {
        return (
            <ResendConfirmationUI
                handleForm={this.handleForm}
                handleModal={this.handleModal}
                {...this.state}
                {...this.props}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ResendConfirmation)
