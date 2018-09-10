import React from 'react'
import HeaderComp from './header'
import FooterComp from '../../widgets/footer/footer'

function PublicLayout(props) {
    return (
        <div>
            <HeaderComp/>
                {props.children}
            <FooterComp/>
        </div>
    )
}

export default PublicLayout
