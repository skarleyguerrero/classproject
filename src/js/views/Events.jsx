import React from "react";
import Flux from "react-flux-dash";
import { Link } from "react-router-dom";

export default class Events extends Flux.View {
    
  render(){
       
        return(
            <div>
                {/*this is the nav and logo bar */}
                   <nav className="navbar navbar-expand-lg navbar-light justify-content-between navbar-expand-sm">
                    <a className="navbar-brand" href="#">grouped</a>
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
                
                        
                {/*this is the jumbotron info bar */}
                    <div className="jumbotron jumbotron-fluid eventHero">
                        <div className="container-fluid">
                            <div className="row">
                        {/*left side */}
                                <div className="col-md-8 jumboLeft">
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="eventDate">Tuesday, March 13, 2018</p>
                                            <h1 className="eventTitle"> Cats + Coffee All Day</h1>
                                            <div className="row">
                                                <div>
                                                    <img src="//placehold.it/50" className="rounded-circle" />
                                                </div>
                                                <div className="authors">
                                                    <span className="text">Hosted by</span>
                                                    <span className="link"><Link to="/"> Mr. Whiskers</Link></span>
                                                    <p><span className="text">From</span>
                                                    <span className="link"><Link to="/"> Pur-Town</Link></span></p>
                                                </div>        
                                
                                                 </div>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                {/*right side */}
                                <div className="col-md-4 jumboRight">
                                    <div className="attendance">
                                        <p><strong>Are you going?</strong> X people going</p>
                                    </div>
                                    <div className="row rsvpBTN flex-nowrap">
                                        <div className="col-md-5">
                                            <button type="button" className="btn btn-primary w-100 yesBTN">Yes</button>
                                        </div>
                                        <div className="col-md-5">
                                            <button type="button" className="btn btn-primary w-100 noBTN">No</button>
                                        </div>
                                    </div>
                                    <div className="row socialMedia flex-nowrap">
                                        <div className="col-md-6">
                                            <button type="button" className="btn-floating btn-sm btn-twi"><i className="fab fa-twitter"></i></button>
                                            <span>Tweet It</span>
                                        </div>
                                        <div className="col-md-6">
                                            <a type="button" className="btn-floating btn-sm btn-fb"><i className="fab fa-facebook-f"></i></a>
                                             <span>Share It</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    
                {/*body of page */}
                <div className="container-fluid">
                    <div className="row">
                        {/*body left side*/}
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-12">
                                <img className="img-fluid eventPhoto" src="http://via.placeholder.com/500X300" alt="event image of..." />
                                <h5 className="details"><strong>Details</strong></h5>
                                <p className="bodyText">Snuggle up with cute kitties, hot lattes, and a book. We host this event twice a month for a place to socialize or maybe come out for alternative therapy.<br/><br/>There are a few rules to follow for this event:</p>
                                <ul>
                                    <li>You must purchase a beverage (e.g. coffee, tea, cocoa, etc)</li>
                                    <li>Stay as long as you like but only 30 minutes with each cat</li>
                                    <li>Be kind to cats and humans alike</li>
                                    <li>No children under 12 years old. This event is an escape for most people who attend</li>
                                    <li>Must wear headphones for phone calls and music</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        
                         {/*body right side*/}
                        <div className="col-md-5 order-first">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row cardInfo">
                                        <div>
                                            <span> <i className="far fa-clock"></i></span>
                                        </div>
                                        <div>
                                            <span className="card-date">Tuesday, March 13, 2018</span><br/>
                                            <span className="card-time">6:00 PM to 9:00 PM</span><br/>
                                            <span className="card-schedule">Every first and last Tuesday of the month</span>
                                        </div>
                                    </div>
                                </div>
                                <img top ="w-100" src="http://via.placeholder.com/350x150" alt="map of the location" />                            
                                
                            </div>
                        </div>
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
  
  
  
  
  
            
    