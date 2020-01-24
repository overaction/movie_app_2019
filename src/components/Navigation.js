import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"
function Navigation() {
    console.log();
    return (
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/Abouts">About</Link>
    </div>
    )
}

export default Navigation;