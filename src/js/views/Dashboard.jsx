import React from "react";
import Flux from "react-flux-dash";
import { Link } from "react-router-dom";
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

export default class Dashboard extends Flux.View {
    
    render(){
        // Render the Calendar
        var today = new Date();
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        
        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between navbar-expand-sm">
                <a className="navbar-brand" href="#">Our Meetup</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link nav-item" to="/"> Dashboard</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-12">
                            <div className="card">
                            <div className="card-header">
                                <h2>Monday, October 23</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-2">
                                        <h5>11:00AM</h5>
                                    </div>
                                    <div className="col-10">
                                        <h5 className="card-title">Event Title</h5>
                                        <p className="card-text">Event details provided here</p>
                                        <a href="#" className="btn btn-primary">See Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    
                    
                    
                    
                    
                    
                        <div className="col-4">
                            <InfiniteCalendar
                                width={400}
                                height={600}
                                selected={today}
                                disabledDays={[0,6]}
                                minDate={lastWeek}
                        />
                    </div>
                </div>
            </div>
        
        
        
        
   
            </div>

            );
    }
    
    
}