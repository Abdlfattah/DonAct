import React, { Component } from 'react'
import { connect } from 'react-redux'
import RegisterUI from './register_ui'
import { register, clearRegister } from '../../actions/user_actions'
import { Loader } from 'semantic-ui-react'

class Register extends Component {

    state={
        waiting:false,
        success:false,
        msg:'',
        modalOpen:false
    }

    handleForm = ({name,lastname,adress,phoneNumber,password,typeOfCharity,email},role) =>{
        if(role==='donor'){
            this.props.dispatch(register({name,lastname,password,email,phoneNumber,role}))
        }
        else{
            this.props.dispatch(register({name,adress,password,email,phoneNumber,typeOfCharity,role}))
        }
        this.setState({
            waiting:true
        })
    }
    componentWillReceiveProps = (nextProps) => {
        if(nextProps.user.register){
            if(nextProps.user.register.success){
                this.setState({
                    waiting:false,
                    msg:nextProps.user.register.msg,
                    modalOpen:true,
                    success:true
                })
            }
            else{
                this.setState({
                    waiting:false,
                    success:false,
                    msg:nextProps.user.register.type? nextProps.user.register.msg:'Something wrong happend',
                    modalOpen:true
                })

            }
            this.props.dispatch(clearRegister())
        }
        
    }
    
    handleModal = () =>{
        this.setState({ modalOpen: false })
    }

    render() {
        return (
           <RegisterUI 
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
export default connect(mapStateToProps)(Register)