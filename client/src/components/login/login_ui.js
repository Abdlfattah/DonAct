import React from 'react'
import { Button, Form, Divider, Modal, Header, Icon } from 'semantic-ui-react'
import { TextInput } from '../../widgets/render_field'
import { reduxForm } from 'redux-form'
import FormComp from '../../widgets/form'

function LoginUI(props) {

    const items = [
        {
            comp:TextInput,
            name:'email',
            placeholder:'Enter your email',
            type:'email',
            icon:{name:'mail',color:'blue'}
        },
        {
            comp:TextInput,
            type:'password',
            placeholder:'Enter your password',
            name:'password',
            icon:{name:'key',color:'blue'}
        }
    ]

    return (
        <div>
            <FormComp 
                items={items} 
                title='Sign in'
                buttonText='Sign in'
                buttonColor='instagram'
                fluid={true}
                {...props}
            />
            <Divider />
            <Button fluid href='/register' >
                Sign up 
            </Button>
            <Modal
                open={props.modalOpen}
                onClose={props.handleModal}
                basic
                size='small'
            >
                <Header icon='warning' content='Login faild' />
                <Modal.Content>
                    <h3>{props.msg}</h3>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='blue' onClick={props.handleModal} inverted>
                        <Icon name='checkmark' /> Try again
                    </Button>
                </Modal.Actions>
            </Modal>    
        </div>
    )
}

export default reduxForm({
    form:'login'
})(LoginUI)
