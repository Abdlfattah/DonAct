import React from 'react'
import { Button } from 'semantic-ui-react'
import PostsList from './posts_list'
import style from './style.css'
import { items } from './static_content'
import DonationsList from './donations_list'

class RenderItems extends React.Component {

    state={
        tab:false
    }

    handleVisbility = (e,type) =>{
        if(type==='post'){
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
        console.log('rendeItem',this.props)
        return (
            <div>
                <div className={style.switch_buttons}>
                <Button.Group  attached='top'>
                    <Button  
                        toggle  
                        color={!this.state.tab?'facebook':null} 
                        onClick={(e)=>this.handleVisbility(e,'donation')}
                    >
                        {items[this.props.role].post.text}
                    </Button>
                    <Button   
                        toggle 
                        color={!this.state.tab?null:'facebook'} 
                        onClick={(e)=>this.handleVisbility(e,'post')}
                    >
                         {items[this.props.role].donation.text}
                    </Button>
                </Button.Group>
                </div>
                {!this.state.tab?
                    <PostsList posts={this.props.posts} />
                     :
                    <DonationsList  
                        role={this.props.role} 
                        donations={this.props.donations}
                    />
               }
            </div>
        )
    }
    
}

export default RenderItems
