import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContextProvider, PrivateRoute } from "../Hooks/useAuth";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MyEventsPage from "../pages/MyEventsPage/MyEventsPage";
import RegisterPage from "../pages/RegistrationPage/RegisterPage";
import Header from "./Header/Header";
import AddExtraEvent from "../pages/addExtraEvent";
import AdminList from "../pages/AdminList/AdminList";
import AdminAddEvent from "../pages/AdminAddEvent/AdminAddEvent";

const MainComponent = () => {
    return (
        <>
            <AuthContextProvider>
                <Router>
                    <main>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/admin" component={AdminList} />
                        <Route
                            exact
                            path="/addNewEvent"
                            component={AdminAddEvent}
                        />
                        <Route exact path="/login" component={LoginPage} />
                        {/* <RegisterPage /> */}
                        <PrivateRoute exact path="/myevents/:email">
                            <MyEventsPage />
                        </PrivateRoute>
                        <PrivateRoute
                            exact
                            path="/register/:eventId"
                            component={RegisterPage}
                        />
                        <Route
                            exact
                            path="/addextraevent"
                            component={AddExtraEvent}
                        />
                    </main>
                </Router>
            </AuthContextProvider>
        </>
    );
};

export default MainComponent;
