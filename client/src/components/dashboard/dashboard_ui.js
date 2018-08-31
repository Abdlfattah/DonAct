import React from 'react'
import { Button, Table, Icon, Grid } from 'semantic-ui-react'

function DashboardUI(props) {
    return (
        <Grid>
            <Grid.Row textAlign='right'>
                <Button 
                    color='google plus'
                    href={`/${props.user.auth.role}/post`}
                    floated='right'
                > 
                    <Icon name='add' />
                    New donation
                </Button>
            </Grid.Row>
            <Grid.Row>
                <Table >
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Food</Table.HeaderCell>
                        <Table.HeaderCell>Calories</Table.HeaderCell>
                        <Table.HeaderCell>Protein</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>Apples</Table.Cell>
                        <Table.Cell>200</Table.Cell>
                        <Table.Cell>0g</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Orange</Table.Cell>
                        <Table.Cell>310</Table.Cell>
                        <Table.Cell>0g</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
            </Grid.Row>
        </Grid>
    )
}

export default DashboardUI
