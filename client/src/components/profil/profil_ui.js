import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react'

function ProfilUI({user}) {

    return (
        <Grid >
            <Grid.Column width={4}>
                <Card
                    color='blue'
                    icon='mail'
                    fluid
                >
                    <Image src={user.auth.image=''?`/api/public/${user.auth.image}`:'/image/avatar.png'}/>
                    <Card.Header as='h3' textAlign='center'>
                        <b>{`${user.auth.name} ${user.auth.lastname}`}</b>
                    </Card.Header>
                    <Card.Meta textAlign='center'>
                        {user.auth.email}
                    </Card.Meta>
                </Card>
            </Grid.Column>
            <Grid.Column>

            </Grid.Column>
        </Grid>
    )
}

export default ProfilUI
