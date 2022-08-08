import React from "react";
import { Table } from "semantic-ui-react";
import JsonData from "../data";
import './DynamicGrid.css';
function DynamicGrid() {
const tableWidth={
  width:JsonData.TableWidth
}
  return (
    <div className="center">
    <Table celled style={tableWidth}>
      <Table.Header  >
         {/* TODO: textAlign : center */}
        <Table.Row textAlign="center">
          {JsonData.Columns.map((data) => (
            <Table.HeaderCell key={data.Name} style={{width:data.Width}} >{data.Name}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {/*
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row> */}
      </Table.Body>
    </Table>
    </div>
  );
}

export default DynamicGrid;
