import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";
import Jumbotron from "./Jumbotron";

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
                    <div className="col md-4 d-flex justify-content-center">
                     <SearchForm />
                    </div>
                </Row>
                <hr />
                <Row>
                        <div className="col md-4 offset1 centering">
                            Image
                        </div> 
                        <div className="col md-2 centering">
                            Name
                        </div>
                        <div className="col md-2 centering">
                            Phone
                        </div>
                        <div className="col md-2 centering">
                            Email
                        </div>
                        <div className="col md-2 centering">
                            DOB
                        </div>
                </Row>
                <hr />
            </Container>
        )
    }
}

export default EmployeeContainer;