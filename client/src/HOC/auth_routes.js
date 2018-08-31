import React from 'react'
import { authUser } from '../actions/user_actions'
import { connect } from 'react-redux'
import { Dimmer, Loader } from 'semantic-ui-react'

export default function auth (Comp,type,Layout){

    class ComposedComp extends React.Component{

        state={
            waiting:true
        }
 
        componentWillMount = () =>{
            this.props.dispatch(authUser())
        }

        componentWillReceiveProps = (nextProps) => {
           if(nextProps.user.auth){
                const data = nextProps.user.auth
                if(data.isAuth && (type==='excluded' || !(data.role===type))){
                    this.props.history.push(`/${data.role}/dashboard`)
                }
                if(!data.isAuth && (type==='charity' || type==='donor')){
                    this.props.history.push('/')
                }
                this.setState({waiting:false})
           }
        }

        render(){
            return(
                <div>
                    {!this.state.waiting?
                    <Layout {...this.props}>
                        <Comp {...this.props}/>
                    </Layout> 
                    :
                    <Dimmer active>
                        <Loader indeterminate>Loading</Loader>
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