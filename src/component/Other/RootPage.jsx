import React from "react";
import "./RootPage.css";

// Component
import RootLeftPage from "./RootLeftPage";
import RouteProtectedComponent from "../RouteComponent";
// Component

export default function RootPage(){
    
    return (
        <div className="root-page">
            <div className="left-page">
                <RootLeftPage />
            </div>
            <div className="right-page">
                <RouteProtectedComponent />
            </div>
        </div>
    );
}