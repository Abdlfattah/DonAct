import React from 'react'
import { Menu, Segment, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class HeaderComp extends React.Component {
    state = { 
        activeItem: 'home',
        items:[
            {
                text:'Home',
                name:'home',
                link:'/'
            },
            {
                text:'Support a charity',
                name:'support',
                link:'/donation'
            },
            
        ]
    }

    renderitems = (items) =>(
        items.map((item,i)=>(
            <Menu.Item as='a'
                key={i} 
                name={item.text} 
                active={this.state.activeItem === item.name} 
                link
                href={item.link}
            />
        ))
    )

    render() {
        console.log(this.props)
        return (
                    <div className='header-container'>
                        <Menu  
                           pointing
                           secondary
                        >
                            <Menu.Item as='h3' >
                                    <Image src='/logo.png' size='tiny' href='/' />
                            </Menu.Item>
                            {this.renderitems(this.state.items)}
                           
                            <Menu.Item as='h3' position='right'>
                                <Button.Group>
                                    <Button primary 
                                            href='/register'
                                            size='large'
                                    >
                                        Register
                                    </Button>
                                    <Button.Or size='large' text='Or' />
                                    <Button basic 
                                            color='blue' 
                                            href='/login'
                                            size='large'
                                    >
                                        Log in
                                    </Button>
                                </Button.Group>
                            </Menu.Item>        
                        </Menu>
                    </div>

        )
    }
}

