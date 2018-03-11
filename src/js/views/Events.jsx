import React from "react";
import Flux from "react-flux-dash";
import { Link } from "react-router-dom";

export default class Events extends Flux.View {
    
  render(){
       
        return(
            <div>
                {/*this is the nav and logo bar */}
                   <nav className="navbar navbar-expand-lg navbar-light justify-content-between navbar-expand-sm">
                    <a className="navbar-brand" href="#">Group up</a>
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
                        
                        {/*left side */}
                            <div className="row">
                                <div className="col-md-8 jumboLeft">
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="eventDate">Tuesday, March 13, 2018</p>
                                            <h1 className="eventTitle"> Cats + Coffee All Day</h1>
                                            <div className="row">
                                               <div className="col-md-1">
                                                    <img src="//placehold.it/50" className    ="rounded-circle" />
                                                </div>
                                                <div className="col-md-11 theHost">
                                                    <span className="text">Hosted by</span>
                                                    <span className="link"><Link to="/"> Mr. Whiskers</Link></span>
                                                    <p><span className="text">From</span>
                                                    <span className="link"><Link to="/"> Pur-Town    </Link></span></p>
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
                                    <div className="row rsvpBTN">
                                        <div className="col-md-6">
                                            <button type="button" className="btn btn-primary w-100">Yes</button>
                                        </div>
                                        <div className="col-md-6">
                                            <button type="button" className="btn btn-primary w-100">No</button>
                                        </div>
                                    </div>
                                    <div className="row socialMedia">
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
                    </div>
                    
                {/*body of page */}
                <div className="container-fluid">
                    <div className="row">
                        {/*body left side*/}
                        <div className="col-7">
                            <div className="row">
                                <div className="col-12">
                                <img className="eventPhoto" src="http://via.placeholder.com/500X300" alt="event image of..." />
                                <h5><strong>Details</strong></h5>
                                <p>Example body text describing the event. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim nec enim pharetra ultrices. Maecenas placerat interdum lectus, non dictum felis vehicula at. </p>
                                <p>Sed rutrum venenatis dolor, sit amet bibendum mi consectetur at. In hac habitasse platea dictumst. Nullam facilisis dignissim nisi eget cursus. Vestibulum sed libero mauris. Nam elementum lobortis purus, vitae rhoncus justo mattis non. Morbi id erat at nunc finibus dignissim. </p>
                    
                                </div>
                            </div>
                        </div>
                        
                         {/*body right side*/}
                        <div className="col-5">
                            <div className="card">
                                <img top ="w-100" src="http://via.placeholder.com/350x150" alt="Card image cap" />                            
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            );
    }
    
    
}
  
  
  
  
  
            
    