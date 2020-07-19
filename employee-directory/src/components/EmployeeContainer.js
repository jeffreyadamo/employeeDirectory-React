import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";
import Jumbotron from "./Jumbotron";
import InfoRow from "./InfoRow";
import Legend from "./Legend";
import employeeList from "../utils/employeeList.json";

class EmployeeContainer extends Component {
    state = {
        search: "",
        employees: employeeList,
        results: []
      };

    componentDidMount() {
        API.sortByAlphabet(employeeList)
        // this will display employees alphabetically
        this.setState({ results: API.sortByAlphabet(employeeList)});
    }

    // trying to import this isn't working:
    getFilter = (query) => { 
        const results = employeeList.filter((obj) => {
         return Object.keys(obj).reduce((acc, curr) => {
              return acc || obj[curr].toLowerCase().includes(query);
        },
        false);
         })
        console.log(results); 
    }

    ///
    // const findMe="Jut";
        // findMe = findMe.toLowerCase()
    // console.log(findMe);
    searchEmployees = (employeeList, name) => {
        var results;    
        name = name.toUpperCase();    
        results = employeeList.filter(function(emp) {
            console.log(emp.first)
            return emp.name.first.toUpperCase().indexOf(name) !== -1;
        });
        console.log(results);
        return results;
    }


    handleInputChange = event => {
        this.searchEmployees(employeeList, event.target.value)
        this.setState({ search: event.target.value });
        this.setState({ results: this.searchEmployees(employeeList, event.target.value)})
    };

    render() {

        return (
            <Container>
                <Row>
                    <SearchForm 
                        handleInputChange= {this.handleInputChange}
                        value={this.search}/>
                </Row>
                <hr />
                <Row>
                    <Legend />
                </Row>
                <hr />
                {this.state.results.map((emp, index) => (
                <InfoRow 
                    key = {index}
                    image = {emp.picture.medium}
                    firstName = {emp.name.first}
                    lastName = {emp.name.last}
                    phone = {emp.phone}
                    email = {emp.email}
                    dob = {emp.dob.date}
                    color = "odd"
                    />
                )
                )}

                // <InfoRow color="odd"/>
                // <InfoRow color="even"/>


            </Container>
        )
    }
}

export default EmployeeContainer;