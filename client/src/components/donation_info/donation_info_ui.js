import React from 'react'
import PosterInfo from './poster_info'
import DonationInfo from './donation_info'
import { Grid, Header } from 'semantic-ui-react'

function DonationInfoUI(props) {

    const renderView = ()=>(
        <Grid divided>
            <Grid.Column width={4}>
                <PosterInfo {...props.donation.poster}/>
            </Grid.Column>
            <Grid.Column textAlign='center' width={10}>
                <DonationInfo handleDonate={props.handleDonate} {...props.donation}/>
            </Grid.Column>
        </Grid>
    )

    return (
       <div >
           <Header  as='h2' textAlign='center'>
                {props.donation.title}
            </Header>
           {
               props.success?
               renderView()
               :null
           }
       </div>
    )
}

export default DonationInfoUI
