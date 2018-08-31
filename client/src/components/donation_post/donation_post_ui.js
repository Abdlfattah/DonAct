import React from 'react'
import { Icon, Step, Grid, Button } from 'semantic-ui-react'
import { items } from './static_content'

function DonationPostUI(props) {
    

    const renderItems = (items) =>(
        items.map((item,i)=>(
            <Step key={i}>
                <Icon name={item.icon} />
                <Step.Content>
                <Step.Title>{item.title}</Step.Title>
                <Step.Description>{item.description}</Step.Description>
                </Step.Content>
            </Step>
        ))
    )
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={2}>
                    <Button circular color='blue' >
                        <Icon name='angle left'/>
                        Back
                    </Button>
                </Grid.Column>
                <Grid.Column  width={12}>

                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Step.Group fluid
                                vertical 
                                attached='top'
                    >
                        {renderItems(items)}
                    </Step.Group>
                </Grid.Column >
                <Grid.Column width={8}>
                    
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default DonationPostUI
