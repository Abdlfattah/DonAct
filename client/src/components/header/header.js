import React from 'react'
import { Menu, Segment, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class HeaderComp extends React.Component {
    state = { 
        activeItem: 'home' 
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        return (
                <Segment >
                    <Menu   
                            
                           secondary
                           widths={6}
                    >
                        <Menu.Item >
                            <div className={{'height':'10px','background':'red'}}>
                                <Image centered src='/logo.png' size='small' />
                            </div>
                        </Menu.Item>
                        <Menu.Item 
                            name='home' 
                            active={this.state.activeItem === 'home'} 
                            onClick={this.handleItemClick} 
                        />
                        <Menu.Item
                            name='messages'
                            active={this.state.activeItem === 'messages'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='friends'
                            active={this.state.activeItem === 'friends'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item position='right'>
                            <Button.Group>
                                <Button primary>Sign up</Button>
                                <Button>Log-in</Button>
                            </Button.Group>
                        </Menu.Item>
                        
                    </Menu>
                </Segment>
        )
    }
}

