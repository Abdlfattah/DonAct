import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/user_actions'
import { Dimmer, Loader } from 'semantic-ui-react'

class Logout extends Component {


    componentWillMount = () => {
        this.props.dispatch(logout())
    }

    componentWillReceiveProps = (nextProps) =>{
        if(nextProps.user.logout){
            console.log(nextProps)
            if(nextProps.user.logout.success){
                setTimeout(()=>{
                    this.props.history.push('/')
                },1000)
            }
        }
    }
    render() {
        return (
           <div>
                <Dimmer active>
                    <Loader indeterminate>Logging out ...</Loader>
                </Dimmer> 
           </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Logout)