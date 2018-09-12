import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/user_actions'
import { Dimmer, Loader } from 'semantic-ui-react'
import style from './style.css'

class Logout extends Component {


    componentWillMount = () => {
        this.props.dispatch(logout())
    }

    componentWillReceiveProps = (nextProps) =>{
        if(nextProps.user.logout){
            if(nextProps.user.logout.success){
                setTimeout(()=>{
                    this.props.history.push('/')
                },1000)
            }
        }
    }
    render() {
        return (
            <div className={style.container}>
                <Dimmer active>
                    <Loader>Logging out ...</Loader>
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