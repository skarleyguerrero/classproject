import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar.jsx';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';
import Store from '../stores/Store.jsx';
import Actions from '../actions/Actions.jsx';

import AccordionC from '../component/utility/Accordion.jsx';

import FontAwesome from 'react-fontawesome';



export default class Home extends Flux.View {
    
    constructor(){
        super();
    };
    
    componentWillMount(){
    }
    
    handleStoreChanges() {
    }
   
    render(){
       
        return(
            
            <div>
                <Navbar active="home" />
                <Header />
                <div id="main">
                    <div id="actionCards">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <a href="/login">
                                        <div key="1" className="card justify-content-center align-items-center" id="card1">
                                            <FontAwesome name='user-circle' size="5x"/>
                                            <div className="card-body text-center">
                                                <h4 className="card-title">Update Your Account Profile</h4>
                                            </div>
                                        </div>
                                    </a>    
                                </div>
                            
                                <div className="col-4">
                                    <a href="/login">
                                        <div key="2" className="card justify-content-center align-items-center" id="card2">
                                            <FontAwesome name='list-alt' size="5x"/>
                                            <div className="card-body text-center">
                                                <h4 className="card-title">View your account statement</h4>
                                            </div>
                                        </div>
                                    </a>    
                                </div>
                                
                                <div className="col-4">
                                    <a href="/login">
                                        <div key="3" className="card justify-content-center align-items-center" id="card3">
                                            <FontAwesome name='file-alt' size="5x"/>
                                            <div className="card-body text-center">
                                                <h4 className="card-title">Access Documents</h4>
                                            </div>
                                        </div>
                                    </a>    
                                </div>
                           
                            </div>
                        </div>
                    </div>
                    <div id="aboutOurCommunity" className="card">
                        <h1 className="card-title  bg-light">About our community</h1>
                        <p className="card-body">
                            Napa at the Vineyards is a charming community where you will quickly feel right at home. 
                            Winding sidewalks meander throughout the immaculate grounds, which include lush landscaping and crystal blue lakes. 
                            The community features a spacious private club house with a community swimming pool, children’s pool and a tot lot, 
                            providing hours of fun for your family. The Vineyards’ location is perfectly positioned only minutes from brand new 
                            charter schools, top golf courses, modern movie theaters and fabulous shopping.  Leading South Florida attractions 
                            including NASCAR’s Homestead-Miami Speedway, Biscayne National Park and the Homestead Historic Downtown District are 
                            also right at your doorstep. Plus, commuters will love the convenient location just off of Florida’s Turnpike and US1.
                        </p>
                    </div>
                    <div id="questionsAnswers">
                        <h1>Questions And Answers</h1>
                        <div className="accordion" id="accordion">
                            <div className="card">
                                <a data-toggle="collapse" data-target="#collapseOne">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <a>Collapsible Group Item #1</a>
                                        </h5>
                                    </div>
                                </a>
                    
                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                    
                             <div className="card">
                                <a data-toggle="collapse" data-target="#collapseTwo">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                            <a>Collapsible Group Item #2</a>
                                        </h5>
                                    </div>
                                </a>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>
                   
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
    );
}
}