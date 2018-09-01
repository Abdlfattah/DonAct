import React from 'react'
import { Card, Grid, Image, Segment } from 'semantic-ui-react'
import EditProfil from './edit_profil'

function ProfilUI({user}) {

    return (
        
            <div className='profile-container'>
                <Segment color='blue'>
                    <div className='profile-card'>
                        <Card
                            color='blue'
                            icon='mail'
                        >
                            <Image src={user.auth.image=''?`/api/public/${user.auth.image}`:'/image/avatar.png'}/>
                            <Card.Header as='h2' textAlign='center'>
                                <b>{`${user.auth.name} ${user.auth.lastname}`}</b>
                            </Card.Header>
                        </Card>
                    </div>
                    <EditProfil/>  
                </Segment>
            </div>



    )
}

export default ProfilUI
