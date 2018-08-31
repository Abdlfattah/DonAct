import React from 'react'
import HeaderComp from '../../components/header/header'
import FooterComp from '../../components/footer/footer'

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
