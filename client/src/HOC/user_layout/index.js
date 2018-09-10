import React from 'react'
import { Menu, Icon, Dropdown, Image } from 'semantic-ui-react'
import { items } from './user_menu_config'
import FooterComp  from '../../widgets/footer/footer'
import style from './style.css'

class UserLayout extends React.Component {

    state = { 
        activeItem:'',
        user:this.props.user.auth.user,
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
            case `/dashboard`:
                return 'dashboard'
            case `/posts`:
                return 'posts'
            case `/inbox`:
                return 'inbox'
            default:
                return ''

        }    
    }

    triggerDropdown = (
        <span>
          <Image avatar src={`/api/public/${this.state.user.avatar}`} /> {this.state.user.name} {this.state.user.lastname}
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
            <div>   
                <div className={style.header}>
                    <Menu size='large'  pointing secondary>
                            {this.renderItem(items[this.state.user.role])}
                            <Menu.Item as='h4' position='right'>
                                <Dropdown  item trigger={this.triggerDropdown}>   
                                    <Dropdown.Menu>
                                        <Dropdown.Item href={`/profil`}>My profil </Dropdown.Item>
                                        <Dropdown.Item href='/logout'>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                    </Menu>
                </div>         
                <div className={style.container}> 
                    {this.props.children}
                </div>
                <FooterComp/>
            </div>
        )
    }
}

export default UserLayout
