
import React from "react";
import { Link } from "react-router-dom";

const TheHeader = () =>{
    return(
        <nav className="header">
            <span>Header</span>
            <div>
                <span>
                    <Link to="/">Home</Link>
                </span>
                <span>
                    <Link to="../User">Login</Link>
                </span>
                <span>
                    <Link to="/">Register</Link>
                </span>
                <span>
                    <Link to="../ProfileApp">Profile</Link>
                </span>
                </div>
                </nav>


    )
}

export default TheHeader;