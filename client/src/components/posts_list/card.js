import React from 'react'
import { Card, Button, Image, Icon, Label } from 'semantic-ui-react'
import { options } from '../../config/donation_type'
import moment from 'moment'
import style from './style.css'

function PostCard(props) {

    const renderItems = (items) =>(
        items.map((item,i)=>(
            <Card key={i} color='blue'>
                <Image src={`/api/public/${item.image}`} />
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
                        color='grey' 
                        fluid
                        href={`/post/${item._id}`}
                    >
                        View details
                    </Button>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Icon color='blue' name='warehouse' />
                            {item.poster.name}
                    </div>
                </Card.Content>
            </Card>
        ))
    )

    return (
        <div className={style.card}>
            <Card.Group itemsPerRow={3}>
                {renderItems(props.posts)}
            </Card.Group>
        </div>
    )
}

export default PostCard
