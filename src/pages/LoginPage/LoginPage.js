import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";

import { useContext } from "react";
import { useCallback } from "react";
import { Container } from "react-bootstrap";
// import { useHistory, useLocation } from "react-router-dom";
import { withRouter, Redirect, useHistory, useLocation } from "react-router";

import fireApp from "../../fire-app";
import { AuthContext } from "../../Hooks/useAuth";
import { IconGoogle } from "../../images/logos";
import "./LoginPage.scss";
import firebaseConfig from "../../firebase-config";
import Header from "../../components/Header/Header";

const LoginPage = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoleSignIn = () => {
        fireApp
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                console.log(displayName, email);
            });
    };
    const handleGoogleSignIn = useCallback(async () => {
        try {
            await fireApp.auth().signInWithPopup(provider);
            history.replace(from);
        } catch (error) {
            alert(error);
        }
    }, [history]);
    const { currentUser } = useContext(AuthContext);

    return (
        <>
            <Header />
            <Container>
                <div className="row pt-5">
                    <div className="col-md-6 mt-5 offset-md-3">
                        <div className="p-5 login-container">
                            <h3 className="text-center mb-3 mt-5">
                                Login With
                            </h3>
                            <button
                                onClick={() => handleGoogleSignIn()}
                                className="btn custom-auth-btn btn-block py-3 mb-3 "
                            >
                                <img src={IconGoogle} alt="" /> Continue with
                                Google
                            </button>
                            <p className="text-center mb-5">
                                Don't have an account?{" "}
                                <a href="#">Create an account</a>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default withRouter(LoginPage);
