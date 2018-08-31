import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { postDonation } from '../../actions/donation_actions'
import FormComp from '../../widgets/form'
import validate  from './form_config'
import LoaderComp from '../../widgets/loader'
import ModalComp from '../../widgets/modal'
import { items } from './field_config'
import { post } from '../../widgets/donor_or_charity'
import { Segment } from 'semantic-ui-react';



class Post extends React.Component {

    state={
        msg:'',
        successLink:'',
        success:false,
        waiting:false,
        modalOpen:false,
        role:this.props.user.auth.role
    }

    handleModal = () => this.setState({ modalOpen: false })

    handleForm = ({title,description,image,type}) => {
        let body = new FormData()
        body.append('title',title)
        body.append('description',description)
        body.append('image_type','donation_image')
        body.append('poster',this.props.user.auth._id)
        body.append('type',type)
        body.append('donation_image',image,image.name)
        this.props.dispatch(postDonation(body))
        this.setState({waiting:true})
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.donation.donation){
            const data = nextProps.donation.donation
            if(data.success){
                this.setState({
                    success:true,
                    waiting:false,
                    modalOpen:true,
                    msg:post[this.state.role].msg,
                    successLink:`/${this.state.role}/donation/${data._id}`
                })
            } 
            else{

            }      
        } 
    }

    render() {
        return (
           <div className='form-container'>
                {!this.state.waiting?
                <Segment >
                     <FormComp items={items} 
                        title={post[this.state.role].formTitle}
                        buttonText='Publish'
                        buttonIcon='send'
                        buttonColor='green'
                        fluid={false}
                        handleForm={this.handleForm}
                        {...this.props}
                    /> 
                </Segment>
                    :<LoaderComp/>
                }
                <ModalComp 
                    modalOpen={this.state.modalOpen}
                    handleModal={this.handleModal}
                    msg={this.state.msg}
                    buttonText='See the post'
                    buttonIcon='post'
                    success={this.state.success}
                    successLink={this.state.successLink}
                    {...this.props}
                />
           </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        donation: state.donation
    }
}

export default connect(mapStateToProps)(
    reduxForm({form :'need_post', validate})
    (Post))
