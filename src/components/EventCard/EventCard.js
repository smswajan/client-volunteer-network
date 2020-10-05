import React from "react";
import DM from "../../images/images/libraryBooks.png";
import "./EventCard.scss";

const EventCard = ({ eventDetails, deleteReg }) => {
    const deleteRegistration = (id) => {
        fetch("https://volunteer-network-online.herokuapp.com/delete/" + id, {
            method: "DELETE",
        }).then((res) =>
            res.json().then((result) => console.log("Deleted successfully"))
        );
    };
    return (
        <div className="col-md-6 mb-2">
            <div className="row event-card bg-white p-3 m-2">
                <div className="col-4">
                    <img src={DM} alt="" className="event-img img-fluid" />
                </div>
                <div className="d-flex col-8">
                    <div>
                        <h3>{eventDetails.task} </h3>
                        <h6>{eventDetails.date} </h6>
                        <p>Registered with: {eventDetails.email}</p>
                    </div>
                    <button
                        onClick={() => deleteReg(eventDetails._id)}
                        className="btn btn-secondary align-self-end px-4"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
