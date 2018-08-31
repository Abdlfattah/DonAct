import React from 'react'
import { reduxForm } from 'redux-form'
import { Button, Modal, Icon, Loader, Divider } from 'semantic-ui-react'
import { validate } from './validate_form'
import SignUpForm from './signup_form'

function RegisterUI(props) {


    const renderMessage = ()=>(
        props.success?
        <div>
            <Modal.Header as='h3' >
                <Icon name='check' color='green'/>
                {props.msg} 
            </Modal.Header >
            <Modal.Actions>
                <Button color='green' 
                        onClick={()=>props.history.push('/resend-confirmation')} 
                        inverted
                        floated='right'
                >
                    <Icon name='checkmark' /> Resend a confirmation email
                </Button>
            </Modal.Actions>
        </div>
        :
        <div>
            <Modal.Header as='h3' >
                <Icon name='warning' color='yellow'/>
                {props.msg} 
            </Modal.Header>
            <Modal.Actions>
                <Button 
                    color='yellow' 
                    onClick={props.handleModal} 
                    inverted
                    floated='right'
                >
                    <Icon name='redo' /> Try again
                </Button>
            </Modal.Actions>
        </div>
        
    )


   
   
    
    return (
            <div>
                {props.waiting?
                    <div className='regsiter-form-container'>
                        <Loader active indeterminate size='large'>
                            Loading
                        </Loader>
                    </div> 
                    :
                    <div>
                        <SignUpForm {...props}/>
                        <Divider horizontal>
                            Or
                        </Divider>
                        <Button fluid href='/login' >
                            Sign in 
                        </Button>
                    </div>
                } 
                <Modal
                    open={props.modalOpen}
                    onClose={props.handleModal}
                    basic
                    size='small'
                >
                    {renderMessage()}
                </Modal>     
            </div>
    )
}

export default reduxForm({
    form:'register',
    validate
})(RegisterUI)
