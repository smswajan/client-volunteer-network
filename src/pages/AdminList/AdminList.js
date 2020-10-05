import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoImg from "../../images/logos";
import ListItem from "./ListItem";

const AdminList = () => {
    const [allEvents, setAllEvents] = useState([]);
    useEffect(() => {
        fetch("https://volunteer-network-online.herokuapp.com/registrations")
            .then((res) => res.json())
            .then((data) => {
                setAllEvents(data);
                console.log(data);
            });
    }, []);
    const refreshPage = () => {
        window.location.reload();
    };
    const deleteRegistration = (id) => {
        fetch(`https://volunteer-network-online.herokuapp.com/delete/${id}`, {
            method: "DELETE",
        })
            .then((res) => {
                res.json();
            })
            .then((result) => {
                refreshPage();
                console.log("deleted");
            });
    };
    return (
        <div style={{ width: "100%", height: "100vh" }} className="p-4">
            <Row>
                <div
                    style={{ height: "90vh" }}
                    className="col-3 px-4 pt-3 bg-white"
                >
                    <Link to="/">
                        <img src={LogoImg} alt="" className="site-logo mb-3" />
                    </Link>{" "}
                    <Link to="/admin" className="d-block text-primary mt-5">
                        Volunteer register list
                    </Link>
                    <Link className="text-dark mt-3 d-block" to="/addNewEvent">
                        Add event
                    </Link>
                </div>
                <div className="col-9">
                    <div className="bg-white ml-3 p-4">
                        <h3>Volunteer register list</h3>
                    </div>
                    <div className="mt-4 ml-3 bg-white pt-4 pl-4">
                        <AdminHeader />
                        {allEvents ? (
                            allEvents.map((event) => (
                                <ListItem
                                    deleteReg={deleteRegistration}
                                    eventDetails={event}
                                />
                            ))
                        ) : (
                            <p>Nothing available.</p>
                        )}
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default AdminList;

const AdminHeader = () => {
    return (
        <div
            className="row py-3 mb-3"
            style={{ backgroundColor: "#F8FAFC", borderRadius: "6px" }}
        >
            <div className="col-3">
                <strong>Name </strong>
            </div>
            <div className="col-3">
                <strong>Email ID</strong>{" "}
            </div>
            <div className="col-2">
                <strong>Reg. Date</strong>{" "}
            </div>
            <div className="col-3">
                <strong>Volunteer list</strong>
            </div>
            <div className="col-1">
                <strong>Action</strong>{" "}
            </div>
        </div>
    );
};
