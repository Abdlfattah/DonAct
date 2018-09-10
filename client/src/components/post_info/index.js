import React, { Component } from 'react'
import PostInfoUI from './post_info_ui'
import { connect } from 'react-redux'
import { getPost } from '../../actions/post_actions'
import { donate } from '../../actions/donation_actions'

class PostInfo extends Component {

    state = {
        success:false,
        post:'',
        exist:false,
        modalOpen:false,
        donationId:''
    }

    componentWillMount = () => {
        this.props.dispatch(getPost(this.props.match.params.id))
    }

    componentWillReceiveProps = (nextProps) =>{
        if(nextProps.post.post){
            const data = nextProps.post.post
            if(data.success){
                this.setState({
                    success:true,
                    post:data.post,
                })
            }   
        }
        if(nextProps.donation.donate){
            const data= nextProps.donation.donate
            if(data.success){
                this.setState({
                    donationId:data.donationId,
                    modalOpen:true,
                    exist:data.exist
                })
            }
        }
    }

    handleDonate = () =>{
        this.props.dispatch(donate({
            post:this.state.post._id,
            donor:this.props.currentUser._id,
            charity:this.state.post.poster._id
        }))
    }

    handleModal = () =>{
        this.setState({ modalOpen: false })
    }

    render() {
        return (
            <PostInfoUI 
                {...this.state}
                handleDonate={this.handleDonate}
            />
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        
        post: state.post,
        donation: state.donation
    }
}

export default connect(mapStateToProps)(PostInfo)