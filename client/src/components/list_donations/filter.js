import React from 'react'
import { TextInput, SelectInput } from '../../widgets/render_field'
import { options as donationOptions } from '../../widgets/donation_type'
import { Form, Button } from 'semantic-ui-react'
import{ Field, reduxForm } from 'redux-form'

function Filter(props) {
    props.handleSubmit(data=>console.log('data',data))
    return (
        <div className='filter-container'>
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
                        options={donationOptions}
                        placeholder='Type of donations'
                        name='type'
                        type='select'
                       />
                </Form.Field>
                <Button>Refresh</Button>
            </Form>
        </div>
    )
}

export default reduxForm({
    form : 'filter'
})(Filter)
