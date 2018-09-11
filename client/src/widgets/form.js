import React from 'react'
import { Field } from 'redux-form'
import { Form, Button, Icon } from 'semantic-ui-react'

function FormComp({items, title, buttonText, buttonIcon, buttonColor,fluid,handleUpdate,...props}) {

    const renderForm = (items) =>(
        items.map((item,i)=>(
            <Form.Field key={i}>
               {item.title?
                    <Field 
                        component={item.comp}
                        placeholder={item.placeholder}
                        name={item.name}
                        type={item.type}
                        options={item.options}
                        icon={item.icon}
                        title={item.title}
                        handleUpdate={handleUpdate}
                    />
                    :
                    <Field 
                        component={item.comp}
                        placeholder={item.placeholder}
                        name={item.name}
                        type={item.type}
                        options={item.options}
                        icon={item.icon}
                    />
                }
            </Form.Field>
        ))
    )
    return (
        <div>    
            {title?<p>{title}</p>:null}
            <Form   onSubmit={props.handleSubmit(data=>props.handleForm(data))}>
                {renderForm(items)}
                <Form.Field >
                    <div>
                        <Button 
                            loading={props.submitting} 
                            color={buttonColor}
                            fluid={fluid}
                            basic={props.basic?true:false}
                        >
                            {buttonIcon?
                                <Icon name={buttonIcon} />
                                :null
                            }
                            {buttonText}
                        </Button>
                    </div> 
                </Form.Field>
            </Form>        
        </div>
    )
}

export default FormComp
