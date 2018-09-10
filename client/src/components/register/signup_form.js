import React from 'react'
import { Button } from 'semantic-ui-react'
import { items } from './static_content'
import FormComp from '../../widgets/form'
import style from './style.css'
import { validate } from './validate_form'
import { reduxForm } from 'redux-form'

class SignUpForm extends React.Component {

    state={
        tab:true
    }

    handleVisbility = (e,type) =>{
        if(type==='donor'){
            this.setState({
                tab:true
            })
        }
        else{
            this.setState({
                tab:false
            })
        }
    }
    render(){
        return (
            <div>
                <div className={style.switch_buttons}>
                <Button.Group  attached='top'>
                    <Button 
                        toggle
                        basic
                        onClick={(e)=>this.handleVisbility(e,'donor')}
                        color={this.state.tab?'blue':null}
                    >
                        Sign up as a donor
                    </Button>
                    <Button 
                        toggle
                        basic 
                        onClick={(e)=>this.handleVisbility(e,'charity')}
                        color={this.state.tab?null:'blue'}
                    >
                        Sign up as a charity
                    </Button>
                </Button.Group>
                </div>
                <div>
                   { this.state.tab?
                    <FormComp 
                        items={items.donor} 
                        buttonText='Sign Up'
                        buttonColor='blue'
                        role='donor'
                        fluid={true}
                        {...this.props}
                    />  
                    :
                    <FormComp 
                        items={items.charity} 
                        buttonText='Sign Up'
                        buttonColor='blue'
                        role='charity'
                        fluid={true}
                        {...this.props}
                    /> }
                </div>
            </div>
        )
    }
    
}

export default reduxForm({
    form :'register', validate
})
(SignUpForm)