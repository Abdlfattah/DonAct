import React from 'react'
import { Icon, Step, Grid, Button } from 'semantic-ui-react'
import { items } from '../../config/donation_status'
import PosterInfo from '../post_info/poster_info'

function DonationPostUI(props) {
    const renderItems = (items) =>{
        let stepIndice = 10
        return  items.map((item,i)=>{
                let ActiveStep = false
                let completedStep = true
                let disabledStep = false
                
                if(props.donation.status===i){
                    ActiveStep=true
                    stepIndice=i
                }
                if(i>stepIndice){
                    completedStep=false
                    disabledStep=true
                }
                if(i===stepIndice){
                    completedStep=false
                    disabledStep=false
                }
               
                return (
                       <div key={i}>
                            <Step 
                            active={ActiveStep}
                            completed={completedStep}
                            disabled={disabledStep}
                        >
                            <Icon  name={item.icon} />
                            <Step.Content>
                                <Step.Title>{item.title}</Step.Title>
                                <Step.Description>{completedStep?item.status:item.description}</Step.Description>
                            </Step.Content>
                            {ActiveStep&&props.role==='charity'?
                                <Step active>
                                    <Button 
                                        size='large' 
                                        color='green' 
                                        floated='right' 
                                        basic
                                        onClick={props.updateStatus}
                                        loading={props.waiting}
                                    >
                                        <Icon color='green' name='check'/>
                                        Check
                                    </Button>
                                </Step>
                                :null
                            }
                        </Step>
                        
                       </div>
                    )
            })
    }
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={2}>
                    <Button circular 
                            basic 
                            color='blue'
                            href={`/dashboard`}
                    >
                        <Icon name='angle left'/>
                        Back
                    </Button>
                </Grid.Column>
                <Grid.Column  width={12}>

                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={4}>
                    {props.role==='charity'?
                        <PosterInfo {...props.donation[props.oppositeRole]}/>
                        :
                        <PosterInfo {...props.donation.post.poster}/>
                    }
                </Grid.Column>
                <Grid.Column width={8}>
                    <Step.Group fluid
                                vertical 
                                attached='top'
                    >
                        {renderItems(items[props.role])}
                    </Step.Group>
                </Grid.Column >
            </Grid.Row>
        </Grid>
    )
}

export default DonationPostUI
