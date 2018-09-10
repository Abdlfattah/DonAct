import React from 'react'
import { Icon, Button, Grid, Loader } from 'semantic-ui-react'
import Filter from './filter'
import { options as donationOptions } from '../../config/donation_type'
import PostCard from './card'
import style from './style.css'

function PostsListUI({state,handleForm}) {

    const renderViews = () =>{
        if(state.waiting){
            return (<Loader as='h3' size='medium' active inline='centered'>Loading...</Loader>)
        }
        else{
            return(
                <div className={style.container}>           
                    {state.success?
                        state.posts.length>0?
                            <PostCard posts={state.posts}/>
                            :
                            <div className={style.not_found}>
                                <Icon name='meh outline' size='huge'/>
                                <p>Oopps sorry...There is no result</p>   
                            </div>
                        :
                        <div className={style.not_found}>
                            <Icon name='meh outline' size='huge'/>
                            <p>Something wrong happend</p>
                            <Button >
                                <Icon name='redo'/>
                                Try again
                            </Button>
                        </div>
                    }
                </div>
                )
            
        }

    }


    return (
        <div className={style.container}>
          <Grid>
            <Grid.Row >
                <div className={style.header} >
                    “No one is useless in this world who lightens the burdens of another.“
                </div>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={12}>
                    {renderViews()}
              </Grid.Column>
              <Grid.Column width={4} floated='right' verticalAlign='top'>
                <Filter handleForm={handleForm} donationOptions={donationOptions} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          
      </div>
       
    )
}

export default PostsListUI
