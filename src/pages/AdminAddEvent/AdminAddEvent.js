import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoImg from "../../images/logos";

const AdminAddEvent = () => {
    return (
        <div style={{ width: "100%", height: "100vh" }} className="p-4">
            <Row>
                <div
                    style={{ height: "95vh" }}
                    className="col-3 px-4 pt-3 bg-white"
                >
                    <Link to="/">
                        <img src={LogoImg} alt="" className="site-logo mb-3" />
                    </Link>
                    <Link to="/admin" className="d-block text-dark mt-5">
                        Volunteer register list
                    </Link>
                    <Link
                        className="text-primary mt-3 d-block"
                        to="/addNewEvent"
                    >
                        Add event
                    </Link>
                </div>
                <div className="col-9">
                    <div className="bg-white ml-3 p-4">
                        <h3>Volunteer register list</h3>
                    </div>
                    <div
                        style={{ height: "80vh" }}
                        className="mt-4 ml-3 bg-white pt-4 pl-4"
                    >
                        <form>
                            <div className="row">
                                <div className="col-5">
                                    <label>
                                        <strong>Event Title</strong>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Title"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-5">
                                    <label>
                                        <strong>Event Date</strong>
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-5 mt-5">
                                    <label>
                                        <strong>Description</strong>
                                    </label>
                                    <textarea
                                        className="form-control"
                                        cols="30"
                                        rows="5"
                                        placeholder="Description"
                                    ></textarea>
                                </div>
                                <div className="col-5 mt-5">
                                    <label>
                                        <strong>Description</strong>
                                    </label>
                                    <input type="file" className="d-block" />
                                    <button
                                        className="btn mt-5 btn-primary"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default AdminAddEvent;
