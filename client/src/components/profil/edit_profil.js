import React from 'react'
import { TextInput, FileInput } from '../../widgets/render_field'
import { Field, reduxForm } from 'redux-form'
import { Form, Icon, Button, Grid } from 'semantic-ui-react'

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
            {
                component:FileInput,
                name:'avatar',
                type:'file',
                placeholder:'Re-enter you new password',
                disabled:true
            }
        ]

    }

    disbaledHandle = (i) =>{
        let newItems = this.state.items
        newItems[i].disabled = false

        this.setState({
            items:newItems
        })
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
                        size='meduim' 
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
                    <Grid.Row >
                        <Field
                            component={FileInput}
                            name='avatr'
                            type='file'
                            placeholder=''
                            icon=''
                        />
                    </Grid.Row>
                    {this.renderField(this.state.items)}
                </Grid>
            </Form>  
    )
    }
   
}

export default reduxForm({
    form:'profile'
})(EditProfil)
