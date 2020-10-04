import React from "react";
import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import HeroComponent from "../components/HeroComponent";
import HomeCard from "../components/HomeCard/HomeCard";
import fireApp from "../fire-app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useEffect } from "react";
import Header from "../components/Header/Header";

const db = fireApp.firestore();
const HomePage = () => {
    const ref = db.collection("volunteerNetwork");
    const [value, setValue] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:4000/events")
            .then((res) => res.json())
            .then((data) => {
                setValue(data);
                setLoading(false);
            });
    }, []);
    if (value) {
        console.log(value);
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Header />
            <Container>
                <HeroComponent />

                <Row>
                    {value &&
                        value.map((item) => (
                            <HomeCard key={item.key} properties={item} />
                        ))}
                </Row>
            </Container>
        </>
    );
};

export default HomePage;
