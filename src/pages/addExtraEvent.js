import React from "react";
import { useForm } from "react-hook-form";
import Header from "../components/Header/Header";

const AddExtraEvent = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data, e) => {
        data.key = Number(data.key);
        fetch("https://volunteer-network-online.herokuapp.com/addevent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                e.target.reset();
            });
    };
    return (
        <div>
            <Header />
            <div className="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    placeholder="key"
                                    type="num"
                                    className="form-control mb-3"
                                    name="key"
                                    ref={register({ required: true })}
                                />
                                <input
                                    placeholder="text"
                                    type="text"
                                    className="form-control mb-3"
                                    name="text"
                                    ref={register({ required: true })}
                                />
                                <input
                                    placeholder="img"
                                    type="text"
                                    className="form-control mb-3"
                                    name="img"
                                    ref={register({ required: true })}
                                />
                                <input
                                    placeholder="color"
                                    type="text"
                                    className="form-control mb-3"
                                    name="color"
                                    ref={register({ required: true })}
                                />
                                <button
                                    className="btn btn-primary btn-block"
                                    type="submit"
                                >
                                    Add
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddExtraEvent;
