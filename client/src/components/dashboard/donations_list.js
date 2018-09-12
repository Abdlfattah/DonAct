import React from 'react'
import { Image, Item, Icon, Button } from 'semantic-ui-react'
import style from './style.css'
import { options  } from '../../config/donation_type'
import { items as items_status } from '../../config/donation_status'
import moment from 'moment'


function DonationsList(props) {

    const renderDonation = (items) =>(
        items.map((item,i)=>(
            <Item key={i}>
                <Item.Image className={style.donation_img} as='img' src={`/api/public/${item.post.image}`} />
                <Item.Content >
                    <Item.Header ><h2>{item.post.title}</h2></Item.Header>
                    <Item.Content><div className={style.date}>{moment(item.createdAt).format("DD/MM/YYYY")}</div></Item.Content>
                    <Item.Content >
                       {props.role==='charity'?
                        <div>
                            <Image 
                            avatar
                            bordered
                            src={item.donor.avatar?`/api/public/${item.donor.avatar}`:'/image/avatar.png'} />
                        <span>{item.donor.name}</span>
                        </div>
                        : <div>
                            <b>Posted by</b>
                            <Image 
                            avatar
                            bordered
                            src={item.charity.avatar?`/api/public/${item.charity.avatar}`:'/image/avatar.png'} />
                            <span>{item.charity.name}</span>
                        </div>
                    }
                    </Item.Content>
                    <Item.Meta>
                        <span>{options.find(option=>option.value===item.post.type).text}</span>
                    </Item.Meta>
                    {item.status===4?
                        <div style={{color:'green'}}>
                            <Icon name='check' color='green'/>{items_status[props.role][item.status-1].status}
                        </div>
                        :items_status[props.role][item.status].description
                    }
                    <Item.Extra>
                        <Button 
                            href={`/donation/${item._id}`} 
                            basic 
                            primary 
                            floated='right'
                            circular
                        >
                            See details
                            <Icon name='right chevron' />
                        </Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
        ))
    )
    return (
        <div>
            {props.donations.length===0?
                <div className={style.not_found}>
                    <Icon name='meh outline' size='huge'/>
                    <p>Oopps sorry...There is no result</p>   
                </div>
                :<div className={style.list_container}>
                    <Item.Group divided >
                        {renderDonation(props.donations)}
                    </Item.Group>
                </div>     
                
            }
        </div>
    )
}

export default DonationsList
