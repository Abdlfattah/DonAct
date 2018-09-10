import React from 'react'
import { Button, Grid, Icon, Segment, Modal } from 'semantic-ui-react'
import NewPost from '../new_post/index'
import style from './style.css'
import RenderItems from './renderItems'
import DonationsList from './donations_list'

export default function DashboardUI ({state}){


    return (
      <Grid>
      <Grid.Row >
        {state.role==='charity'?
            <div className={style.add_btn}>   
                    <Modal 
                        closeIcon
                        trigger={   <Button basic color='blue'> 
                                        <Icon name='add' />
                                        New Post
                                    </Button>}>
                        <Modal.Header>New Post</Modal.Header>
                        <Modal.Content>
                            <NewPost role={state.role} posterId={state.posterId}/>
                        </Modal.Content>
                    </Modal>
            </div>
            :<div>
            </div>
        }
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
            <div className={style.container}>
                <Segment>
                    {state.role==='charity'?<RenderItems {...state}/>:<DonationsList donations={state.donations} role={state.role} />}
                </Segment>
            </div>
        </Grid.Column>
      </Grid.Row>
  </Grid>
    )
}