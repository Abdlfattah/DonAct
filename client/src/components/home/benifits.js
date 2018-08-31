import React from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'
import { items } from './benifits_content'

function Benifits() {

    const renderItems = () =>(
        items.map((item,i)=>(
            <Grid.Column as='div' key={i} width={8}>
                <Header color='blue' 
                            size='huge'
                            textAlign='center'
                    >   
                        {item.title}
                </Header>
                <Grid.Row>
                    {item.content.map((subItem,i)=>(
                        <Grid.Column as='div'>
                            <Grid.Row>
                                <Header size='large'>
                                    <Icon circular color='blue' name={subItem.icon}/>
                                    {subItem.title}
                                </Header>
                            </Grid.Row>
                            <Grid.Row>
                                <span>{subItem.content}</span>
                            </Grid.Row>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid.Column>
        ))
    )

    return (
        <Grid.Row>
                {renderItems()}
        </Grid.Row>
    )
}

export default Benifits
