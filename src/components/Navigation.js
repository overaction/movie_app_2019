import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    console.log();
    return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/Abouts">About</Link>
    </div>
    )
}

export default Navigation;