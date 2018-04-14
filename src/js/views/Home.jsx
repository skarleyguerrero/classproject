import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar.jsx';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';
import Store from '../stores/Store.jsx';
import Actions from '../actions/Actions.jsx';

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
              <h1>HOME PAGE</h1>
              
              <Footer/>
            </div>
        );
    }
}