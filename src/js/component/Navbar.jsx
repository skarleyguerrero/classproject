import React from 'react';
import { Link } from "react-router-dom";
import FontAwesome from 'react-fontawesome';

export default class Navbar extends React.Component{
    isActive(value){
    return 'nav-link '+((value===this.props.active) ?'active':'');
    }
    render(){
        return(
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light sticky-top d-flex justify-content-between">
                <div>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className={this.isActive("home")} href="/home" >home</a>
                        </li>
                        <li className="nav-item">
                            <a className={this.isActive("amenities")} href="/amenities">amenities</a>
                        </li>
                        <li className="nav-item">
                            <a className={this.isActive("events")} href="/events">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className={this.isActive("contact")} href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p id="headerLogIn" >User Log In</p>
                    <FontAwesome name="lock" size="2x"/>
                </div>
            </nav>
        );
    }
}