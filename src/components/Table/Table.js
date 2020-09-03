import React, { Component } from "react";
import "./Table.css";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import { Row } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class Table extends Component {
  constructor() {
    super();

    this.state = {
      sortName: [],
      sortOrder: [],
      employees: [],
    };
    this.onSortChange = this.onSortChange.bind(this);
    this.cleanSort = this.cleanSort.bind(this);
  }

  formatDate(dateGiven) {
    var date = new Date(dateGiven);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  imageFormatter(cell, row) {
    return <img src={"" + cell + ""} alt='headshot' />;
  }

  getEmployees = async () => {
    var config = {
      method: "get",
      url: "https://randomuser.me/api/?results=200&nat=us",
    };

    await axios(config)
      .then((res) => {
        var allEmployees = [];
        for (var i = 0; i < res.data.results.length; i++) {
          var person = {
            image: res.data.results[i].picture.thumbnail,
            name: `${res.data.results[i].name.first} ${res.data.results[i].name.last}`,
            phone: res.data.results[i].phone,
            email: res.data.results[i].email,
            dob: this.formatDate(res.data.results[i].dob.date),
          };
          allEmployees.push(person);
        }
        this.setState({
          employees: allEmployees,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getEmployees();
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
      <Row id='table'>
        <BootstrapTable
          data={this.state.employees}
          bordered={false}
          options={options}
          multiColumnSort={4}
          striped
          search
        >
          <TableHeaderColumn dataField='image' dataFormat={this.imageFormatter}>
            Image
          </TableHeaderColumn>
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
