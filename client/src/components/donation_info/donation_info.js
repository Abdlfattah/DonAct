import React from 'react'
import { Header, Icon, Button, Image, Grid, Segment } from 'semantic-ui-react'


function DonationInfo({ donation_image, description, handleDonate, _id }) {
    return (
        <div>
            <Segment raised>
                <Grid>
                    <Grid.Column width={4}>
                        <Image className='donation-image' src={`/api/public/${donation_image}`}/>
                    </Grid.Column>
                    <Grid.Column  width={12}>
                        {description}
                    </Grid.Column>
                </Grid>  
            </Segment>
            <Button  
                color='twitter' 
                size='huge'
                onClick={()=>handleDonate(_id)}
            >
            <Icon name='heart outline'/>
                Donate
            </Button>

        </div>
    )
}

export default DonationInfo
