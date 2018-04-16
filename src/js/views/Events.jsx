import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx'
import AccordionC from '../component/utility/Accordion.jsx';

import FontAwesome from 'react-fontawesome';

export default class Events extends Flux.View {
    
    constructor(){
        super();
    };
    
    componentWillMount(){
    }
    
    handleStoreChanges() {
    }
   
    render(){
       
        return(
            
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
            
        );
    }
}