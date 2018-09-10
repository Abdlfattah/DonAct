import React, { Component } from 'react'
import {connect} from 'react-redux'
import PostsListUI from './post_list_ui'
import { getAllPosts } from '../../actions/post_actions'

class PostsList extends Component {

  state={
    success:false,
    waiting:false,
    posts:[],
  }

  componentWillMount = () =>{
    this.props.dispatch(getAllPosts())
    this.setState({waiting:true})
  } 

  componentWillReceiveProps = (nextProps) =>{
    if(nextProps.post.post){
      const data = nextProps.post.post
      if(data.success){
        this.setState({
          waiting:false,
          posts:data.posts,
          success:true,
          
        })
      }
      else{this.setState({waiting:false})}
    }
  }

  handleForm = data => this.props.dispatch(getAllPosts(data.text,data.type))
  

  render() {
    return (
      <PostsListUI 
        state={this.state} 
        handleForm={this.handleForm}
      />
    )
  }
}

const mapStateToProps = (state) => {
    return {
        post: state.post
    }
}

export default connect(mapStateToProps)(PostsList)
