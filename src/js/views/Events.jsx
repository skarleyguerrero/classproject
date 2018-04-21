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
                <div>
                    
                </div>
            
        );
    }
}