import React from "react";

function SearchForm(props) {
  const value = props.value;
  return (
    <div className="col md-4 d-flex justify-content-center">
      <form>
        <div className="form-group">
          <label htmlFor="search"></label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For an Employee"
            id="search"
          />
          {/* <br />
          <button onClick={props.handleFormSubmit} className="btn btn-primary">
            Search
          </button> */}
        </div>
      </form>
      <p>{value}</p>
    </div>
  );
}

export default SearchForm;
