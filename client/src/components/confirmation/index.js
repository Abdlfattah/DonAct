import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConfirmationUI from './confirmation_ui'
import { confirmation, clearConformation } from '../../actions/user_actions'

class Confirmation extends Component {

    state={
        waiting:true,
        success:false,
        msg:'',
        type:''
    }

    componentWillMount = () =>{
        this.props.dispatch(confirmation(this.props.match.params.token))
    }

    componentWillReceiveProps = (nextProps)=>{
        console.log(nextProps.user)
        if(nextProps.user.confirmation){
            const data = nextProps.user.confirmation
            if(data.success){
                this.setState({
                    waiting:false,
                    success:true,
                    msg:data.msg,
                    type:data.type
                })
            }
            else{
                this.setState({
                    waiting:false,
                    type:data.type,
                    msg:data.type==='internal-err'?
                        'Something wrong happed'
                        :nextProps.user.confirmation.msg
                        
                })
            }
        }
    }

    componentWillUnmount = () =>{
        this.props.dispatch(clearConformation())
    }
    render() {
        return (
        <ConfirmationUI {...this.state}/>
        )
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Confirmation)