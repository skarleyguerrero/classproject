import React from "react";
import Flux from "react-flux-dash";
import { Link } from "react-router-dom";
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import Navbar from '../component/Navbar.jsx';
import meetupStore from '../stores/MeetupStore.jsx';

export default class Dashboard extends Flux.View {
    
    constructor(){
        super();
        this.state = {
            events: meetupStore.getAllEvents()
        };
    }
    
    componentWillMount() {
   meetupStore.on("change", () => {
     this.setState({
       events: meetupStore.getAll(),
     });
   });
  }
    
    
    
    
    render(){
        // Render the Calendar
        var today = new Date();
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        
        let meetupEvents = this.state.events.map((events) =>
        
        <div key={events.id} className="card">
            <h3>{events.title}</h3>
            <div>{events.image}</div>
            <p>{events.day}</p>
            <p>{events.time}</p>
        </div>
        );
        
        return(
            <div>
            
              <Navbar />
              
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4 jumboTitle">Let's Get Together Tonight</h1>
                    <p className="lead jumboSubTitle">a place to meet new friends and maintain current friendships</p>
                </div>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                 {/* event 1 */}
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h2>Tuesday, March 13</h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <h5>6:00PM</h5>
                                            </div>
                                            <div className="col-md-10">
                                                <h5 className="card-title">Cats + Coffee</h5>
                                                <p className="card-text">We supply the cats, the coffee, and the cozy chairs.</p>
                                                <a href="#" className="btn btn-primary">See Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    
                     {/* event 2 */}
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h2>Friday, March 30</h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <h5>7:00PM</h5>
                                            </div>
                                            <div className="col-md-10">
                                                <h5 className="card-title">Let's Relax Together</h5>
                                                <p className="card-text">Bring a bottle of wine and meets us at Party Platter for a good time.</p>
                                                <a href="#" className="btn btn-primary">See Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    
                    
                     {/* event 3 */}
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h2>Sunday, April 1</h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <h5>10:00AM</h5>
                                            </div>
                                            <div className="col-md-10">
                                                <h5 className="card-title">Hiking with Harry</h5>
                                                <p className="card-text">Harry takes you through the woods and back again safely. Your kids are invited!</p>
                                                <a href="#" className="btn btn-primary">See Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                   {/*test add events */}
                
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                    {meetupEvents}
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                
                   
                    </div>
                    {/* the calendar */}
                        <div className="col-md-4">
                            <InfiniteCalendar
                                width={400}
                                height={600}
                                selected={today}
                                disabledDays={[0,6]}
                                minDate={lastWeek}
                            />
                        </div>
                  {/*divs belonging to the container */}
                  </div>
                  </div>
                
        
        
                {/* the footer */}
                <footer className="footer" id="footer">
	                <div className="container">
	                    <div className="row justify-content-between">
                            <div className="col-6">
                                <img className="img-fluid" src="http://placehold.it/50x50" alt="" />
                            </div>
                            <div className="col-6">
                                <ul className="footer__links list-inline text-right">
                                <li className="footer__link list-inline-item">Blog</li>
                                <li className="footer__link list-inline-item">Contact Us</li>
                                </ul>
                            </div>
                		</div>
                	</div>
                </footer>
            
   
            </div>

            );
    }
    
    
}