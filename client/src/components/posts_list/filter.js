import React from 'react'
import { TextInput, SelectInput } from '../../widgets/input_field/render_field'
import { Form, Button, Icon } from 'semantic-ui-react'
import{ Field, reduxForm } from 'redux-form'


function Filter(props) {

    return (
        <div >
            <Form onSubmit={props.handleSubmit(data=>props.handleForm(data))}>
                <Form.Field>
                    <Field
                        component={TextInput}
                        placeholder='Search.....'
                        name='text'
                        type='text'
                        icon='search'
                    />
                </Form.Field>
                <Form.Field>
                    <Field
                        component={SelectInput}
                        options={props.donationOptions}
                        placeholder='Type of donations'
                        name='type'
                        type='select'
                       />
                </Form.Field>
                <Button fluid color='blue' >
                    <Icon 
                        name='redo' 
                        size='large'
                    />
                    Refresh
                </Button>
            </Form>
        </div>
    )
}

export default reduxForm({
    form : 'filter'
})(Filter)
