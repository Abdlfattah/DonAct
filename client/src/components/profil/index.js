import React, { Component } from 'react'
import ProfilUI from './profil_ui'
import { updateUser } from '../../actions/user_actions'

export default class Profil extends Component {


  handleUpdate=(data)=>{
    this.props.dispatch(updateUser(this.props.user.auth._id,data))
  }
  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps)
  }
    
  render() {
    return (
      <div>
        <ProfilUI {...this.props}/>
      </div>
    )
  }
}
