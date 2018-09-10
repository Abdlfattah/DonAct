import React from 'react'
import { TextInput } from '../../widgets/input_field/render_field'
import { reduxForm, Field } from 'redux-form'
import { Button, Form, Modal, Icon } from 'semantic-ui-react'


const validate = (values) => {
    const errors = {}
    //validation email 
    if (!values.email) {
      errors.email = 'The email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    return errors
}

function ResendConfirmationUI(props) {


    const renderMessage = ()=>{
        let text = ''
        let color = ''
        let headerIcon = ''
        let buttonIcon = ''
        let action = () =>{
            
        }
        if(props.success){
            color = 'green'
            headerIcon = 'check'
            buttonIcon = 'checkmark'
            text='Resend a confirmation email'
            action = () =>{
               props.handleModal()
            }
        }
        else{
            if(props.type==='verified'){
                color = 'blue'
                headerIcon = 'warning'
                buttonIcon = 'sign in alternate'
                text='Log in'
                action = () =>{
                    props.history.push('/login')
                }

            } 
            
            else{
                color = 'yellow'
                headerIcon = 'warning'
                buttonIcon = 'redo'
                text='Try again'
                action = () =>{
                    props.handleModal()
                }
            }
        }

        return(
            <div>
                <Modal.Header as='h3' >
                    <Icon name={headerIcon} color={color}/>
                    {props.msg} 
                </Modal.Header >
                <Modal.Actions>
                    <Button color={color} 
                            onClick={action} 
                            inverted
                            floated='right'
                    >
                        <Icon name={buttonIcon} /> {text}
                    </Button>
                </Modal.Actions>
            </div>
        )
    }
        
    
    return (
        <div>
            <p>Resend confirmation email</p>
            <Form onSubmit={props.handleSubmit(data=>{
                        props.handleForm(data)
                    })}>
                <Form.Field>
                    <Field
                        component={TextInput}
                        placeholder='Enter your email'
                        name="email"
                        type='email'
                        icon='mail'
                    
                    />
                </Form.Field>
                <Form.Field>
                    <Button loading={props.waiting} fluid color='green'>
                        Resend Confirmation Email
                    </Button> 
                </Form.Field>
            </Form>
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
    form :'resend_confirmation',
    validate
})(ResendConfirmationUI)
