import React, { Component } from 'react'
import ProfilUI from './profil_ui'
import { updateUser } from '../../actions/user_actions'
import { connect } from 'react-redux'

class Profil extends Component {

  state={
    success:false,
    user:this.props.user.auth.user
  }

  handleUpdate=(image)=>{
    let user = new FormData()
    user.append('image',image,image.name)
    this.setState({success:false})
    this.props.dispatch(updateUser(this.props.user.auth.user._id,user))
  }
  
  componentWillReceiveProps = (nextProps) => {
    if(nextProps.user.update){
      const data=nextProps.user.update
      if(data.success){
        this.setState({
          success:true,
          user:data.user
        })
      }
    }
  }
    
  render() {
    console.log(this.state)
    return (
      <div>
        <ProfilUI {...this.state}
                  handleUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(Profil)
