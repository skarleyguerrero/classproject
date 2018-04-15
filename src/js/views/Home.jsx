import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar.jsx';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';
import Store from '../stores/Store.jsx';
import Actions from '../actions/Actions.jsx';

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
                <Navbar />
                <Header />
                <div id="actionCards">
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <a href="/login">
                                    <div key="1" className="card justify-content-center align-items-center" id="card1">
                                        <FontAwesome name='user-circle' size="5x"/>
                                        <div className="card-body text-center">
                                            <h4 className="card-title">Update Your Account Profile</h4>
                                        </div>
                                    </div>
                                </a>    
                            </div>
                        
                            <div class="col-4">
                                <a href="/login">
                                    <div key="2" className="card justify-content-center align-items-center" id="card2">
                                        <FontAwesome name='list-alt' size="5x"/>
                                        <div className="card-body text-center">
                                            <h4 className="card-title">View your account statement</h4>
                                        </div>
                                    </div>
                                </a>    
                            </div>
                            
                            <div class="col-4">
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
                <div id="aboutOurCommunity">
                    <h1>About our community</h1>
                </div>
                <div id="questionsAnswers">
                    <h1>Questions And Answers</h1>
                </div>
              
                <Footer/>
            </div>
        );
    }
}