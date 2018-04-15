import React from 'react';
import { Link } from "react-router-dom";
import SimpleSlider from "./utility/Slider.jsx"

export default class Header extends React.Component{
    render(){
        return(
            <div id="header">
                <SimpleSlider/>
                
            </div>
        );
    }
}