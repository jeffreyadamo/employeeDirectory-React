import React from 'react';
import employeeList from "../utils/employeeList.json"
import Row from "./Row";

function InfoRow (props) {
    const image = employeeList[0].picture.medium;
    const firstName = employeeList[0].name.first;
    const lastName = employeeList[0].name.last;
    const phone = employeeList[0].phone;
    const email = employeeList[0].email;
    const dob = employeeList[0].dob.date;
    const color = props.color;
    // const styles = {
    //     odd: {
    //         background = "grey"
    //     },
    //     even: {
    //         background = "blue"
    //     }
    // }
    return (
        <Row>
            <div className={`${color} col-12 d-flex justify-content-center infoRow`}>
                <div className="col-md-2 centering">
                    <img src={image} />
                </div> 
                <div className="col-md-2 centering">
                    {firstName} {lastName}
                </div>
                <div className="col-md-2 centering">
                    {phone}
                </div>
                <div className="col-md-4 centering">
                    {email}
                </div>
                <div className="col-md-2 centering">
                    {dob}
                </div>
            </div>
        </Row>

    )
}

export default InfoRow;