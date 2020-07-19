import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import InfoRow from "./InfoRow";
import Legend from "./Legend";
import employeeList from "../utils/employeeList.json";

class EmployeeContainer extends Component {
  state = {
    search: "",
    employees: employeeList,
    results: employeeList,
  };

  componentDidMount() {
    this.setState({ results: employeeList });
  }

  sortFirstName = (event) => {
    event.preventDefault();
    let newArray = API.sortByAlphabet(this.state.results);
    this.setState({ results: newArray });
  };

  searchEmployees = (employeeList, name) => {
    var results;
    name = name.toUpperCase();
    results = employeeList.filter(function (emp) {
      return emp.name.first.toUpperCase().indexOf(name) !== -1;
    });
    return results;
  };

  handleInputChange = (event) => {
    this.searchEmployees(employeeList, event.target.value);
    this.setState({ search: event.target.value });
    this.setState({
      results: this.searchEmployees(employeeList, event.target.value),
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <SearchForm
            handleInputChange={this.handleInputChange}
            value={this.search}
          />
        </Row>
        <hr />
        <Row>
          <Legend clicky={this.sortFirstName} />
        </Row>
        <hr />
        {this.state.results.map((emp, index) => (
          <InfoRow
            key={index}
            image={emp.picture.medium}
            firstName={emp.name.first}
            lastName={emp.name.last}
            phone={emp.phone}
            email={emp.email}
            dob={emp.dob.date}
          />
        ))}
      </Container>
    );
  }
}

export default EmployeeContainer;
