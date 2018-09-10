import React from 'react'
import FormComp from '../../widgets/form'
import validate  from './form_config'
import MessageComp from './message'
import { items } from './field_config'
import { reduxForm } from 'redux-form'
import { Dimmer, Loader} from 'semantic-ui-react'
import style from './style.css'

function NewPostUI(props) {

    return (
        <div className={style.container}>
            {!props.waiting?
                <div>
                    {!props.success?
                        <FormComp 
                            items={items} 
                            buttonText='Publish'
                            buttonIcon='send'
                            buttonColor='green'
                            fluid
                            handleForm={props.handleForm}
                            {...props}
                    
                        /> 
                        :<MessageComp
                            {...props}
                        />
                    }
                </div>
                :<Dimmer active>
                    <Loader inverted as='h3' inline='centered'>Wait please...</Loader>
                </Dimmer>
                
            }
         </div>
    )
}

export default reduxForm({form :'post', validate})(NewPostUI)
