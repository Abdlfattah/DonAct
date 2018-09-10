import React from 'react'
import { Icon } from 'semantic-ui-react'
import style from './style.css'

function ComingSoon() {
    return (
        <div className={style.container}> 
            Coming soon ...
            <Icon size='large' name='thumbs up outline' />
        </div>
    )
}

export default ComingSoon