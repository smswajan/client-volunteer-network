import React from "react";
import { Row } from "react-bootstrap";

const HeroComponent = () => {
    return (
        <div className=" mt-4">
            <h1 className="text-center">I GROW BY HELPING PEOPLE IN NEED</h1>
            <div className="row my-4">
                <div className="col-md-4 offset-md-4 input-group mb-3">
                    <input
                        type="text"
                        name="text"
                        className="form-control"
                        placeholder="Search..."
                        id=""
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary px-4">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroComponent;
