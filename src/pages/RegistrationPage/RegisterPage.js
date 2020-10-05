import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../Hooks/useAuth";
import "./RegistrationPage.scss";

const RegisterPage = () => {
    const { eventId } = useParams();
    const { currentUser } = useContext(AuthContext);
    console.log(eventId);
    const [eventText, setEventText] = useState(null);
    useEffect(() => {
        fetch("https://volunteer-network-online.herokuapp.com/events")
            .then((res) => res.json())
            .then((result) => {
                const selectedEvent = result.find(({ key }) => key == eventId);
                setEventText(selectedEvent.text);
            });
    }, []);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data, e) => {
        console.log(data);
        fetch("https://volunteer-network-online.herokuapp.com/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                e.target.reset();
                window.location.replace("/myevents/" + currentUser.email);
            });
    };

    return (
        <>
            <Header />
            <Container>
                <div className="row py-5">
                    <div className="col-md-6 mt-5 offset-md-3">
                        <div className="">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="bg-white auth-form p-5"
                            >
                                <input
                                    placeholder="Full Name"
                                    type="text"
                                    className="form-control"
                                    defaultValue={currentUser.name}
                                    name="fullName"
                                    ref={register({ required: true })}
                                />
                                <input
                                    placeholder="Username or Email"
                                    type="email"
                                    className="form-control"
                                    defaultValue={currentUser.email}
                                    name="email"
                                    ref={register({ required: true })}
                                />
                                <input
                                    placeholder="Date"
                                    type="date"
                                    className="form-control"
                                    name="date"
                                    ref={register({ required: true })}
                                />
                                <input
                                    placeholder="Description"
                                    type="text"
                                    className="form-control"
                                    name="descrioption"
                                    ref={register({ required: true })}
                                />
                                <input
                                    placeholder="Organize books at the library"
                                    type="text"
                                    className="form-control"
                                    defaultValue={eventText}
                                    name="task"
                                    ref={register({ required: true })}
                                />
                                <button
                                    type="submit"
                                    className="btn-lg mt-5 btn btn-block btn-primary"
                                >
                                    Registration
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default RegisterPage;
