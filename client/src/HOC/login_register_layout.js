import React from 'react'
import { Icon, Image, Segment  } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function RegisterLoginLayout(props) {
    return (
        <div>
            <div className='register-header'>
                <div className='register-clone-icon'>
                    <Link to='/'>
                        <Icon size='large' name='close'/>
                    </Link>
                </div>
                <div className='register-logo'>
                    <Image src='/logo.png'/> 
                </div>
            </div>
            <div className='register-container' >    
                <Segment>
                    {props.children}   
                </Segment>
            </div>
        </div>
        
    )
}

export default RegisterLoginLayout
