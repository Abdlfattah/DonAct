import React from 'react'
import { Button, Reveal, Container } from 'semantic-ui-react'
import { items } from './static_content'
import FormComp from '../../widgets/form'

class SignUpForm extends React.Component {

    state={
        charityTab:false,
        donorTab:true
    }

    handleVisbility = (e,type) =>{
        if(type==='donor'){
            this.setState({
                donorTab:true,
                charityTab:false
            })
        }
        else{
            this.setState({
                donorTab:false,
                charityTab:true
            })
        }
    }
    render(){
        return (
            <div>
                <div className='signup-buttons'>
                <Button.Group 
                    toggle 
                     
                    attached='top'
                   
                >
                    <Button color='instagram'  onClick={(e)=>this.handleVisbility(e,'donor')}>
                        Sign up as a donor
                    </Button>
                    <Button  onClick={(e)=>this.handleVisbility(e,'charity')}>
                        Sign up as a charity
                    </Button>
                </Button.Group>
                </div>
                <div style={{display:this.state.donorTab?'initial':'none'}}>
                        <FormComp 
                            items={items.donor} 
                            buttonText='Sign Up'
                            buttonColor='instagram'
                            fluid={true}
                            {...this.props}
                        />
                </div>     
                <div style={{display:this.state.charityTab?'initial':'none'}}>
                    <FormComp 
                        items={items.charity} 
                        buttonText='Sign Up'
                        buttonColor='instagram'
                        fluid={true}
                        handleForm={this.props.handleForm}
                        {...this.props}
                    /> 
                </div>
            </div>
        )
    }
    
}

export default SignUpForm
