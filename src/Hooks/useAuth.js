import React, { useState, useContext, useEffect, createContext } from "react";
import { Redirect, Route } from "react-router-dom";
import fireApp from "../fire-app";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(false);

    useEffect(() => {
        fireApp.auth().onAuthStateChanged((usr) => {
            const newUser = {
                name: usr.displayName,
                email: usr.email,
            };
            setCurrentUser(newUser);
            setPending(false);
        });
    }, []);
    if (pending) {
        return <>Loading...</>;
    }
    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);
export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={(routeProps) =>
                currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: routeProps.location },
                        }}
                    />
                )
            }
        />
    );
};
