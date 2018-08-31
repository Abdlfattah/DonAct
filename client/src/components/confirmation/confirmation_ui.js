import React from 'react'
import { Icon, Loader, Message, Button } from 'semantic-ui-react'

function ConfirmationUI(props) {

    const renderButton = () =>{
        if(props.success || props.type==='verified'){
            return(
                <Button fluid primary href='/login'>
                    Sign in 
                </Button>
            )
        }
        if(props.type==='user-not-found'){
            return (
                <Button fluid href='/register'>
                    Create an account 
                </Button>
            )
        }
        if(props.type==='expired'){
            return (
                <Button fluid color='green' href='/resend-confirmation'>
                     Resend verification link 
                </Button>
            )
        }
        else{
           return null
        }
    }
    return (
        <div className='confirmation-container'>
            <p>Email confirmation</p>
            {
                props.waiting?
                <Loader active inline='centered' />
                :
                <div>
                    <Message
                        color={props.success?'green':'yellow'}
                    >
                       
                        <Message.Header>
                            <Icon name={props.success?'check':'attention'}/>
                            {props.msg} 
                        </Message.Header>
                    </Message>
                    {renderButton()}
                </div>
            }
        </div>
    )
}

export default ConfirmationUI
