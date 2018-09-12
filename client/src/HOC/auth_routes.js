import React from 'react'
import { authUser } from '../actions/user_actions'
import { connect } from 'react-redux'
import { Dimmer, Loader } from 'semantic-ui-react'

export default function auth (Comp,type,Layout){

    class ComposedComp extends React.Component{

        state={
            waiting:true,
            currentUser:''
        }
 
        componentWillMount = () =>{
            this.props.dispatch(authUser())
        }

        componentWillReceiveProps = (nextProps) => {
           if(nextProps.user.auth){
            const data = nextProps.user.auth
            if(data.success && (type==='excluded' || (type==='donor' && type!=data.user.role) )){
                return this.props.history.push(`/dashboard`)
            }
            if(!data.success && type!=='excluded'){
                return this.props.history.push(`/`)
            }
                this.setState({
                    waiting:false,
                    currentUser:data.user
                })
           }
        }

        render(){
            return(
                <div>
                    {!this.state.waiting?
                    <Layout {...this.props}>
                        <Comp currentUser={this.state.currentUser}
                                {...this.props}
                        />
                    </Layout> 
                    :
                    <Dimmer >
                        <Loader active >Loading ...</Loader>
                    </Dimmer> 
                    } 
                </div>          
            )
        }
    }

    const mapStateToProps = (state) => {
        return {
            user: state.user
        }
    }
    return connect(mapStateToProps)(ComposedComp)
}