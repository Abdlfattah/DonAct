import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginUI from './login_ui'
import { login, clearLogin } from '../../actions/user_actions'

class Login extends Component {

  state={
    waiting:false,
    msg:'',
    type:'',
    modalOpen:false
  }

  componentWillReceiveProps = (nextProps)=>{
    if(nextProps.user.login){
      const data = nextProps.user.login
      if(data.success) this.props.history.push(`/${data.role}/dashboard`)
      else{
        this.setState({
          msg:data.type==='internal-err'?'Something wrong happend':data.msg,
          modalOpen:true
        })
      }
      this.props.dispatch(clearLogin())
    }
    this.setState({
      waiting:true
    })
  }

  handleModal = () => this.setState({modalOpen:false})
  
  handleForm = (data) => {
    this.props.dispatch(login(data))
    this.setState({
      waiting:true
    })
  }
  
  
  render() {
    return (
      <LoginUI
        handleForm={this.handleForm}
        handleModal={this.handleModal}
        {...this.state}
      />
    )
  }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Login)