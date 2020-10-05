import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import EventCard from "../../components/EventCard/EventCard";
import Header from "../../components/Header/Header";
import { AuthContext, useAuth } from "../../Hooks/useAuth";

const MyEventsPage = () => {
    const { email } = useParams();
    const [myEvents, setMyEvents] = useState([]);

    useEffect(() => {
        fetch(
            "https://volunteer-network-online.herokuapp.com/myevents?email=" +
                email
        )
            .then((res) => res.json())
            .then((data) => setMyEvents(data));
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
    const logCons = (id) => {
        console.log(id);
    };
    return (
        <>
            <Header />
            <Container>
                <Row>
                    {myEvents ? (
                        myEvents.map((event) => (
                            <EventCard
                                deleteReg={deleteRegistration}
                                eventDetails={event}
                            />
                        ))
                    ) : (
                        <h4 className="text-center">
                            You haven't registered yet. Click{" "}
                            <a href="/">here</a> to register.
                        </h4>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default MyEventsPage;
