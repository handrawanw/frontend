import React from "react";

import {
    Route,Switch
    
} from "react-router-dom";

// Component
import Login from "./Login/Login";

import {useDispatch} from "react-redux";

// Component
import RootPage from "./Other/RootPage";
// Component

// Protected Route
import ProtectedLogin from "./Other/ProtectedLogin";
// Protected Route

export default function RouteRegister(){

    const Dispatch=useDispatch();
    
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <ProtectedLogin path={"/dashboard"}>
                <RootPage />
            </ProtectedLogin>
        </Switch>
    );
}
