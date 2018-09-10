import React from 'react'
import { Card, Image, Rating} from "semantic-ui-react"

function PosterInfo({ avatar, name, email, phoneNumber, adress, website }) {
    return (
        <Card fluid>
            <Image src={avatar?`/api/public/${avatar}`:'/image/avatar.png'} />
            <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
                <span className='date'><Rating defaultRating={3} maxRating={5} disabled /></span>
            </Card.Meta>
            <Card.Description>
                <p><b>E-mail : </b>{email}</p>
                <p><b>Phone number : </b>{phoneNumber}</p>
                <p><b>Website : </b>{website}</p>
                <p><b>Adress : </b>{adress}</p>
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Our goal :
            </Card.Content>
        </Card>
    )
}

export default PosterInfo
