import React from 'react'
import PosterInfo from './poster_info'
import DonateComp from './donate_comp'
import { Grid, Header, Modal, Icon, Button } from 'semantic-ui-react'

function PostInfoUI(props){

    const renderView = ()=>(
        <Grid divided>
            <Grid.Column width={4}>
                <PosterInfo {...props.post.poster}/>
            </Grid.Column>
            <Grid.Column textAlign='center' width={10}>
                <DonateComp exist={props.exist} handleDonate={props.handleDonate} {...props.post}/>
            </Grid.Column>
        </Grid>
    )

    const renderMessage = ()=>(
        !props.exist?
        <div>
            <Modal.Header as='h3' >
                <Icon name='check' color='green'/>
                Your request has been successfully sent to the actual charity
            </Modal.Header >
            <Modal.Actions>
                <Button color='green' 
                       href={`/donation/${props.donationId}`} 
                        inverted
                        floated='right'
                >   Track your donation
                    <Icon name='checkmark' /> 
                </Button>
            </Modal.Actions>
        </div>
        :
        <div>
            <Modal.Header as='h3' >
                <Icon name='warning' color='yellow'/>
                You have already sent a request for this donation
            </Modal.Header>
            <Modal.Actions>
                <Button 
                    color='yellow' 
                    href={`/donation/${props.donationId}`}  
                    inverted
                    floated='right'
                >
                    <Icon name='redo' /> 
                    See the stat of this donation
                    
                </Button>
            </Modal.Actions>
        </div>
        
    )

    return (
       <div >
           <Header  as='h2' textAlign='center'>
                {props.post.title}
            </Header>
           {
               props.success?
               renderView()
               :null
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

export default PostInfoUI
