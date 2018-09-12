import React from 'react'
import { TextInput } from '../../widgets/input_field/render_field'
import { Field, reduxForm } from 'redux-form'
import { Form, Icon, Grid } from 'semantic-ui-react'
import FileInput from '../../widgets/input_file'

class EditProfil extends React.Component{

    state={
        items:[
            {
                component:TextInput,
                name:'email',
                type:'email',
                placeholder:'Entre you new email',
                icon:{name:'mail',color:'blue'},
                disabled:true
            },
            {
                component:TextInput,
                name:'password',
                type:'password',
                placeholder:'Entre you new password',
                icon:{name:'key',color:'blue'},
                disabled:true
            },
            {
                component:TextInput,
                name:'password_confirm',
                type:'password',
                placeholder:'Re-entre your new password',
                icon:{name:'key',color:'blue'},
                disabled:true
            },
        ]

    }
    



    
    renderField = (items) =>(
        items.map((item,i)=>(
            <Grid.Row key={i}>
                <Grid.Column width={15}>
                    <Field
                        component={TextInput}
                        name={item.name}
                        type={item.type}
                        placeholder={item.placeholder}
                        icon={item.icon}
                        disabled={item.disabled}
                    />
                </Grid.Column>
                <Grid.Column verticalAlign='middle' width={1}>
                    <Icon 
                        color='grey' 
                        name='settings' 
                        onClick={()=>this.disbaledHandle(i)}
                    />
                </Grid.Column>
            </Grid.Row>

        ))
    )
    render(){
        return (
            <Form>
                <Grid>
                    <Grid.Row textAlign='center'>
                        <FileInput title="change your profil's picture"
                                    {...this.props}
                        />
                    </Grid.Row>
                </Grid>
            </Form>  
    )
    }
   
}

export default reduxForm({
    form:'profile'
})(EditProfil)
