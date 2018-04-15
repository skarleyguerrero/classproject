import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx'
import SimpleSlider from "../component/utility/Slider.jsx"


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
                <SimpleSlider/>
            </div>
        );
    }
}