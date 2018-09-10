import React from 'react'
import Benifits from './benifits'
import CallToAction from './call_to_action'
import { Grid } from 'semantic-ui-react'
import style from './style.css'

function Home() {
    return (
        <div className={style.home}>
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
