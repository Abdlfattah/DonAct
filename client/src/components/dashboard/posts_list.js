import React from 'react'
import { Image, Item, Icon, Button } from 'semantic-ui-react'
import style from './style.css'
import { options } from '../../config/donation_type'


function PostsList(props) {

    const renderPosts = (items) =>(
        items.map((item,i)=>(
            <Item key={i}>
                <Item.Image className={style.donation_img} as='img' src={`/api/public/${item.image}`} />
                <Item.Content >
                    <Item.Header as='a'>{item.title}</Item.Header>
                    <Item.Content >
                       {props.role==='donor'?
                        <div>
                            <Image 
                            avatar
                            bordered
                            rounded
                            src={item.poster.avatar?`/api/public/${item.poster.avatar}`:'/image/avatar.png'} />
                        <span>{item.poster.name}</span>
                        </div>
                        :null
                    }
                    </Item.Content>
                    <Item.Meta>
                        <span>{options.find(option=>option.value===item.type).text}</span>
                    </Item.Meta>
                    {item.description}
                    <Item.Extra>
                        {props.role==='donor'?
                            <Button 
                                href={`post/${item._id}'}`} 
                                basic 
                                primary 
                                floated='right'
                                circular
                            >
                                See details
                                <Icon name='right chevron' />
                            </Button>
                            :<div></div>
                        }
                    </Item.Extra>
                </Item.Content>
            </Item>
        ))
    )
    return (
        <div>
            {props.posts.length===0?
                <div className={style.not_found}>
                    <Icon name='meh outline' size='huge'/>
                    <p>Oopps sorry...There is no result</p>   
                </div>
                :<Item.Group divided >
                    {renderPosts(props.posts)}
                </Item.Group>      
                
            }
        </div>
    )
}

export default PostsList
