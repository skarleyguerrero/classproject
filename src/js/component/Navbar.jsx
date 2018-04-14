import React from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light justify-content-between navbar-expand-sm">
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active"><Link className="nav-link nav-item home" to="/"> Home</Link></li>
                        <li className="nav-item active"><Link className="nav-link nav-item amenities" to="/Amenities"> Amenities</Link></li>
                        <li className="nav-item active"><Link className="nav-link nav-item events" to="/events"> Events</Link></li>
                        <li className="nav-item active"><Link className="nav-link nav-item contact" to="/contact"> Contact</Link></li>
                        <li className="nav-item active"><Link className="nav-link nav-item login" to="/login"> Login</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}