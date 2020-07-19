import React from 'react';
import employeeList from "../utils/employeeList.json"
import Row from "./Row";

function InfoRow (props) {

    return (
        <Row>
            <div key={props.index} className={`${props.color} col-12 d-flex justify-content-center infoRow`}>
                <div className="col-md-2 centering">
                    <img alt="" src={props.image} />
                </div> 
                <div className="col-md-2 centering">
                    {props.firstName} {props.lastName}
                </div>
                <div className="col-md-2 centering">
                    {props.phone}
                </div>
                <div className="col-md-4 centering">
                    {props.email}
                </div>
                <div className="col-md-2 centering">
                    {props.dob}
                </div>
            </div>
        </Row>

    )
}

export default InfoRow;