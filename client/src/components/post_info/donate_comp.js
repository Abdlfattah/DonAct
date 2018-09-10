import React from 'react'
import { Icon, Button, Image, Grid, Segment } from 'semantic-ui-react'
import style from './style.css'


function DonateComp({ image, description, handleDonate, exist }) {
    return (
        <div>
            <Segment raised>
                <Grid>
                    <Grid.Column width={4}>
                        <Image className={style.image} src={`/api/public/${image}`}/>
                    </Grid.Column>
                    <Grid.Column  width={12}>
                        {description}
                    </Grid.Column>
                </Grid>  
            </Segment>
            <Button  
                color='blue' 
                size='huge'
                onClick={handleDonate}
                disabled={exist}
            >
            <Icon name='heart outline'/>
               Donate
            </Button>

        </div>
    )
}

export default DonateComp
