import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

function DynamicGrid(){

    const Json={
        TableWidth : 80,
        Columns :
            [
                {
                    Name:'S.no',
                    // ValueField:''
                    Width:10
                //  Alignment:
                },
                {
                    Name:'Name',
                    // ValueField:''
                    Width:10
                //  Alignment:
                }, {
                    Name:'Project',
                    // ValueField:''
                    Width:10
                //  Alignment:
                }, {
                    Name:'Start Date',
                    // ValueField:''
                    Width:10
                //  Alignment:
                }, {
                    Name:'End Date',
                    // ValueField:''
                    Width:10
                //  Alignment:
                },
            ],
        DataAPI : '',
        DataAPIParams: '',
        APIMethodType : "Get",
        }
        return (
<Table celled>
    <Table.Header>
      <Table.Row>
          {/* {
              Json.map((key,col)=>{
                <Table.HeaderCell>{col.Name}</Table.HeaderCell>

              })
          } */}
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {/* <Table.Row>
        <Table.Cell>
          <Label ribbon>First</Label>
        </Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row> */}
    </Table.Body>

    {/* <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer> */}
  </Table>
        )
    }
  


export default DynamicGrid;