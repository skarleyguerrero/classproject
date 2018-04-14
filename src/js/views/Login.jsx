import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx'

export default class Login extends Flux.View {
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
              
              <h1>Login</h1>
              
              <Footer/>
            </div>
        );
    }
}