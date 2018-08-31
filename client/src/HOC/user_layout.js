import React from 'react'
import { Menu, Icon, Dropdown, Image } from 'semantic-ui-react'
import { donorItems, charityItems} from './user_config/user_menu_config'
import FooterComp  from '../components/footer/footer'

class UserLayout extends React.Component {

    state = { 
        activeItem:'',
        role:this.props.user.auth.role,
    }

    componentWillMount = ()=>{
        const currentTab = this.getLocation()
        this.setState({
            activeItem:currentTab
        })
    }

    getLocation =()=>{
        const loc = this.props.location.pathname
        
        switch (loc) {
            case `/${this.state.role}/dashboard`:
                return 'dashboard'
            case `/${this.state.role}/donation`:
                return 'donation'
            case `/${this.state.role}/inbox`:
                return 'inbox'
            default:
                return ''

        }    
    }

    triggerDropdown = (
        <span>
          <Image avatar src='/logo.png' /> {this.props.user.auth.name} {this.props.user.auth.lastname}
        </span>
      )

    renderItem = (items) =>(
        items.map((item,i)=>(
            <Menu.Item 
                as='a'
                key={i}
                active={this.state.activeItem === item.name} 
                onClick={this.handleItemClick}
                link  
                href={item.link}
            >
                <Icon name={item.icon} color={item.iconColor} />
                <Menu.Header>
                    {item.text} 
                </Menu.Header>
            </Menu.Item>
        ))
    )

    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    render(){
        return (
            <div >   
                <div className='header-container'>
                    <Menu size='large'  pointing secondary>
                            {this.renderItem(this.props.user.auth.role==='donor'?donorItems:charityItems)}
                            <Menu.Item as='h4' position='right'>
                                <Dropdown  item trigger={this.triggerDropdown}>   
                                    <Dropdown.Menu>
                                        <Dropdown.Item href={`/${this.state.role}/profil`}>My profil </Dropdown.Item>
                                        <Dropdown.Item href='/logout'>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                    </Menu>
                </div>         
                <div className='user-layout-container'> 
                    {this.props.children}
                </div>
                <FooterComp/>
            </div>
        )
    }
}

export default UserLayout
