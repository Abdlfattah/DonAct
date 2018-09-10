import React from 'react'
import { Card, Image, Segment } from 'semantic-ui-react'
import EditProfil from './edit_profil'
import style from './style.css'

function ProfilUI(props) {

    return (
        
            <div className={style.container}>
                <Segment color='blue'>
                    <div className={style.card}>
                        <Card
                            color='blue'
                            icon='mail'
                        >
                            <Image src={props.user.avatar?`/api/public/${props.user.avatar}`:'/image/avatar.png'}/>
                            <Card.Header as='h2' textAlign='center'>
                                <b>{`${props.user.name} ${props.user.lastname}`}</b>
                            </Card.Header>
                        </Card>
                    </div>
                    <EditProfil {...props}/>  
                </Segment>
            </div>



    )
}

export default ProfilUI
