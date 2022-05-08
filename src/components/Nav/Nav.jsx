import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";
import logo from "./logo.png";

function Nav() {
    return (
        <nav class="nav">
            <img id="img" src={logo} at="this is the logo"/>
            <Link to="/">HomePage</Link>
            <Link to="/login">Login</Link>
            <Link to="/createAccount">CreateAccount</Link>
            
            {/* <Link to="/project">ProjectPage</Link> */}
        </nav>
    )
}

export default Nav;