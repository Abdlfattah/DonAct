import React from 'react'
import { Modal, Button, Icon } from 'semantic-ui-react'
function ModalComp(props) {
    const renderMessage = ()=>(
        props.success?
        <div>
             <Modal.Header as='h3' >
                <Icon name='check' color='green'/>
                {props.msg} 
            </Modal.Header >
            <Modal.Actions>
                <Button color='green' 
                        onClick={()=>props.history.push(props.successLink)} 
                        inverted
                        floated='right'
                >
                    <Icon name='checkmark' /> {props.buttonText}
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

export default ModalComp
