import React from "react";
import { Button } from "react-bootstrap";

const ListItem = ({ eventDetails, deleteReg }) => {
    return (
        <div className="row">
            <div className="col-3">{eventDetails.fullName} </div>
            <div className="col-3">{eventDetails.email} </div>
            <div className="col-2">{eventDetails.date} </div>
            <div className="col-3">
                <p>{eventDetails.task} </p>
            </div>
            <div className="col-1">
                <Button
                    size="sm"
                    variant="danger"
                    onClick={() => deleteReg(eventDetails._id)}
                >
                    Del
                </Button>{" "}
            </div>
        </div>
    );
};

export default ListItem;
