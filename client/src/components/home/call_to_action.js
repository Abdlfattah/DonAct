import React from 'react'
import { Button } from 'semantic-ui-react'

function CallToAction() {
    return (
        <div className='home-bg'>
            <div className="home-text">
                <p className="font-allerta">Make sure your donation gets to where it needs to</p> 
            </div>
            <div className='home-call-to-action'>
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
