import React from "react";
import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../../Hooks/useAuth";
import LogoImg from "../../images/logos";
import "./Header.scss";
import * as firebase from "firebase/app";
import "firebase/auth";

const Header = () => {
    const { currentUser } = useContext(AuthContext);
    const handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => console.log("Signout done"));
    };
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" variant="white" className="py-3">
                <Container>
                    <Navbar.Brand className="mr-auto" href="/">
                        <img className="site-logo" src={LogoImg} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav text-center">

                        <Nav className="d-flex align-items-center text-dark">
                            <Nav.Link href="/">
                                <span className="text-dark"> Home</span>
                            </Nav.Link>
                            <Nav.Link href="/">
                                <span className="text-dark">Register New</span>
                            </Nav.Link>
                            {currentUser && (
                                <Nav.Link href={"/myevents/" + currentUser.email}>
                                    <span className="text-dark"> My Events</span>
                                </Nav.Link>
                            )}

                            <Nav.Link href="/">
                                <span className="text-dark"> Blog</span>
                            </Nav.Link>

                            <Nav.Link href="/admin">
                                <span className="btn btn-dark">Admin</span>
                            </Nav.Link>
                            {currentUser && (
                                <Nav.Link href="/">
                                    <span className="btn btn-primary">
                                        {currentUser.name}
                                    </span>
                                </Nav.Link>
                            )}
                            {currentUser ? (
                                <Nav.Link>
                                    <button
                                        onClick={() => handleSignOut()}
                                        className="btn btn-danger"
                                    >
                                        LogOut
                                </button>
                                </Nav.Link>
                            ) : (
                                    <Nav.Link href="/">
                                        <span className="btn btn-primary">Login</span>
                                    </Nav.Link>
                                )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
