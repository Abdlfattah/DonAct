import React from 'react'
import { connect } from 'react-redux'
import { post} from '../../actions/post_actions'
import NewPostUI from './post_ui'


class NewPost extends React.Component {

    state={
        msg:'Your need have been successfully posted',
        successLink:'',
        success:false,
        waiting:false,
        modalOpen:false,
        image:''
    }


    handleForm = ({title,description,type}) => {
        if(this.state.image!==''){
            let body = new FormData()
            body.append('title',title)
            body.append('description',description)
            body.append('image_type','donation_image')
            body.append('poster',this.props.posterId)
            body.append('type',type)
            body.append('image',this.state.image,this.state.image.name)
            this.props.dispatch(post(body))
            this.setState({waiting:true})
        }
        
    }

    handleUpdate = (url) => {
        this.setState({image:url})
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.post.newPost){
            const data = nextProps.post.newPost
            if(data.success){
                this.setState({
                    success:true,
                    waiting:false,
                    modalOpen:true,
                    successLink:`/post/${data.id}`
                })
            } 
            else{

            }      
        } 
    }

    render() {
        return (
          <NewPostUI {...this.state}
                  handleForm={this.handleForm}
                  handleUpdate={this.handleUpdate}
                  {...this.props}
          />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        post: state.post
    }
}

export default connect(mapStateToProps)(NewPost)
