import React, { Component } from "react";
import "./Table.css";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import { Row } from "react-bootstrap";
var employees = [];

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortName: [],
      sortOrder: [],
    };
    this.onSortChange = this.onSortChange.bind(this);
    this.cleanSort = this.cleanSort.bind(this);
  }

  onSortChange(name, order) {
    const sortName = [];
    const sortOrder = [];

    for (let i = 0; i < this.state.sortName.length; i++) {
      if (this.state.sortName[i] !== name) {
        sortName.push(this.state.sortName[i]);
        sortOrder.push(this.state.sortOrder[i]);
      }
    }

    sortName.push(name);
    sortOrder.push(order);
    this.setState({
      sortName,
      sortOrder,
    });
  }

  cleanSort() {
    this.setState({
      sortName: [],
      sortOrder: [],
    });
  }

  render() {
    const options = {
      sortName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      onSortChange: this.onSortChange,
    };
    return (
      <Row>
        <BootstrapTable data={employees} options={options} multiColumnSort={4}>
          <TableHeaderColumn dataField='image'>Image</TableHeaderColumn>
          <TableHeaderColumn dataField='name' isKey={true} dataSort={true}>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='phone' dataSort={true}>
            Phone
          </TableHeaderColumn>
          <TableHeaderColumn dataField='email' dataSort={true}>
            Email
          </TableHeaderColumn>
          <TableHeaderColumn dataField='dob' dataSort={true}>
            DOB
          </TableHeaderColumn>
        </BootstrapTable>
      </Row>
    );
  }
}

export default Table;
