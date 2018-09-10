import React from 'react'
import style from './style.css'
import { Button, Icon } from 'semantic-ui-react'

export default function InputFile({handleUpdate,title,...props}){

    let fileInput = React.createRef();

    const handleFileInput = (e) =>{
        handleUpdate(e.target.files[0])
    }
    return (
        <div className={style.container}>
            <input
                style={{display:'none'}}
                onChange={e=>handleFileInput(e)}
                onBlur={e=>handleFileInput(e)}
                type="file"
                ref={fileInput}
                {...props}
            />
            <Button 
                onClick={()=>fileInput.current.click()}
                color='blue'
                basic
            >
                <Icon color='blue' name='upload'/>
                {title}
            </Button>
        </div>
    )
}
