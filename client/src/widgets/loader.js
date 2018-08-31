import React from 'react'
import { Loader } from 'semantic-ui-react'

function LoaderComp() {
    return (
        <div className='loader' >
            <Loader as='h3' size='medium' active inline='centered'>Wait please...</Loader>
        </div>
    )
}

export default LoaderComp
