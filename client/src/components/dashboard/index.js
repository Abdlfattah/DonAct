import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDonations } from '../../actions/donation_actions'
import { getMyPosts } from '../../actions/post_actions'
import DashboardUI from './dashboard_ui'
import { Loader } from 'semantic-ui-react'



class Dashboard extends Component {

    state={
        success:false,
        role:this.props.currentUser.role,
        posterId:this.props.currentUser._id,
        donations:[],
        posts:[]
    }

    componentWillMount = () => {
        this.props.dispatch(getMyPosts(this.props.currentUser._id))
        this.props.dispatch(getDonations(this.props.currentUser._id,this.props.currentUser.role))
    }
    
    componentWillReceiveProps = (nextProps)=>{
        if(nextProps.post.post && nextProps.donation.donation){
            const posts = nextProps.post.post
            const donations = nextProps.donation.donation
            if(posts.success && donations.success ){
                this.setState({
                    success:true,
                    donations:donations.donations,
                    posts:posts.posts
                })
            }
        }
    }

    render() {
        return (
        <div>
            {this.state.success?
                <DashboardUI state={this.state}/>
                :<Loader active>
                    Loading...
                </Loader>
            }
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        post: state.post,
        donation:state.donation
    }
}
export default connect(mapStateToProps)(Dashboard)

