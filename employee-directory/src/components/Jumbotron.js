import React from "react";
import "../App.css";


function Jumbotron() {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4 d-flex justify-content-center">
                    Employee Directory
                </h1>
                <br />
                <p className="lead d-flex justify-content-center">
                    Click on carrots to filter by heading or use the search box to narrow your results
                </p>
            </div>
            <div className="littleLine"></div>
        </div>
    )
}

export default Jumbotron;