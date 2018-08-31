import React from 'react'
import Benifits from './benifits'
import CallToAction from './call_to_action'
import { Grid } from 'semantic-ui-react'

function Home() {
    return (
        <div className='benifits-container'>
            <Grid>
                <Grid.Row>
                    <CallToAction/>
                </Grid.Row>
                <Benifits/>
            </Grid>
        </div>
    )
}

export default Home
