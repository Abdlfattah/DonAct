import React from 'react'
import { Card, Button, Image, Icon, Label } from 'semantic-ui-react'
import { options } from '../../widgets/donation_type'
import moment from 'moment'

function DonationCard(props) {

    const renderItems = (items) =>(
        items.map((item,i)=>(
            <Card key={i} color='blue'>
                <Image src={`/api/public/${item.donation_image}`} />
                <Card.Content>
                    <Card.Header>{item.title}</Card.Header>
                    {options.map((subItem,i)=>{
                        if(subItem.value===item.type){
                            return (
                                <Label key={i} color='blue' ribbon>
                                    <Icon name={subItem.icon.name}/>
                                    {subItem.text}
                                </Label>
                            )
                        }
                    })}
                    <Card.Meta>{moment(item.createdAt).format('DD/MM/YYYY')}</Card.Meta>
                    <Card.Description>{item.description}</Card.Description>
                </Card.Content>
                <Card.Content>
                    <Button 
                        inverted 
                        color='vk' 
                        fluid
                        href={`/donor/donation/info/${item._id}`}
                    >
                        view details
                    </Button>
                </Card.Content>
                <Card.Content extra>
                    {item.poster.role==='donor'?
                            <div>
                                <Icon color='green' name='user' />
                                {item.poster.name} {item.poster.lastname}
                            </div>
                            :
                            <div>
                                <Icon color='blue' name='warehouse' />
                                    {item.poster.name}
                            </div>
                        }
                </Card.Content>
            </Card>
        ))
    )

    return (
        <div className='donation-card'>
            <Card.Group itemsPerRow={3}>
                {renderItems(props.donations)}
            </Card.Group>
        </div>
    )
}

export default DonationCard
