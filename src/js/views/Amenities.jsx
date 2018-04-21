import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx'
import Store from '../stores/Store.jsx';
import Actions from '../actions/Actions.jsx';

export default class Amenities extends Flux.View {
    
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
            
              <Navbar active="amenities" />
              
              <h1>Amenities</h1>
              
              <Footer/>
            </div>
        );
    }
}