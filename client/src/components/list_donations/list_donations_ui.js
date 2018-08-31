import React from 'react'
import { Icon, Button, Grid, Loader, Container } from 'semantic-ui-react'
import Filter from './filter'
import DonationCard from './card'

function ListDonationUI(props) {

    const renderViews = () =>{
        if(props.waiting){
            return (
                <div className='loader' >
                    <Loader as='h3' size='medium' active inline='centered'>Loading...</Loader>
                </div>
            )
        }
        else{
            return(
                <div className='post-container'>           
                    {props.success?
                        props.donations.length>0?
                            <DonationCard donations={props.donations}/>
                            :
                            <div className='not-found'>
                                <Icon name='meh outline' size='huge'/>
                                <p>Oopps sorry...There is no result</p>   
                            </div>
                        :
                        <div className='not-found'>
                            <Icon name='meh outline' size='huge'/>
                            <p>Something wrong happend</p>
                            <Button >
                                <Icon name='redo'/>
                                Try again
                            </Button>
                        </div>
                    }
                </div>
                )
            
        }

    }


    return (
        <div className='donation-container'>
          <Grid>
            <Grid.Row >
                <Container as='h2' textAlign='center'>
                    “No one is useless in this world who lightens the burdens of another.“
                </Container>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={12}>
                    {renderViews()}
              </Grid.Column>
              <Grid.Column width={4} floated='right' verticalAlign='top'>
                <Filter handleForm={props.handleForm} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          
      </div>
       
    )
}

export default ListDonationUI
