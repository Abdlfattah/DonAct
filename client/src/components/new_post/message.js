import React from 'react'
import { Message, Button } from 'semantic-ui-react'
import style from './style.css'

function MessageComp(props) {
    return (
        <div className={style.message}>
            <Message
                success
                icon='check'
                header={props.msg}
            />
            <Button floated='right' 
                    basic 
                    size='large'
                    href={props.successLink}
            > 
                See post 
            </Button>
        </div>
    )
}

export default MessageComp
