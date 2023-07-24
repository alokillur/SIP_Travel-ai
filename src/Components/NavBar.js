import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

const NavBar = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        AI-Travel Agency
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Destination">
                                    Port of Call
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/AboutUs">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default NavBar;