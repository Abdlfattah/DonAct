import React from 'react'
import { Button } from 'semantic-ui-react'
import style from './style.css'

function CallToAction() {
    return (
        <div className={style.container}>
            <div className={style.home_text}>
                <p>Make sure your donation gets to where it needs to</p> 
            </div>
            <div className={style.call_to_action}>
                <Button.Group widths={16}>
                    <Button size='huge'  
                            color='instagram'
                            content='Make a donation'
                    />
                    <Button size='huge'  
                            content='How it works'
                    />
                </Button.Group>
            </div>
        </div>
    )
}

export default CallToAction
