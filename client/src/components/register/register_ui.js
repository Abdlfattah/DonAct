import React from 'react'
import { Button, Modal, Icon, Loader, Divider } from 'semantic-ui-react'
import SignUpForm from './signup_form'
import style from './style.css'

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
                        href={'/resend-confirmation'} 
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
                    <div className={style.loader}>
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
                        <Button fluid basic color='green' href='/login' >
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

export default RegisterUI