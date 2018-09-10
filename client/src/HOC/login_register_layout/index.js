import React from 'react'
import { Icon, Image, Segment  } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import style from './style.css'

function RegisterLoginLayout(props) {
    return (
        <div>
            <div className={style.header}>
                <div >
                    <Link to='/'>
                        <Icon size='large' name='close'/>
                    </Link>
                </div>
                <div className={style.logo}>
                    <Image src='/logo.png'/> 
                </div>
            </div>
            <div className={style.container} >    
                <Segment>
                    {props.children}   
                </Segment>
            </div>
        </div>
        
    )
}

export default RegisterLoginLayout
