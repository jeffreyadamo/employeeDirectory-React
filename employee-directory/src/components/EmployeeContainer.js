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

class EmployeeContainer extends Component {
    state = {
        result: {},
        search: ""
      };

    componentDidMount() {
    this.searchEmployees("The Matrix");
    }

    searchEmployees = query => {
        API.search(query)
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
      };

    handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
        [name]: value
    });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchMovies(this.state.search);
      };

    render() {
        return (
            <Container>
                <Row>
                    <SearchForm />
                </Row>
                <hr />
                <Row>
                    <Legend />
                </Row>
                <hr />
                <InfoRow color="even"/>

                <InfoRow color="odd"/>
                <InfoRow color="even"/>


            </Container>
        )
    }
}

export default EmployeeContainer;