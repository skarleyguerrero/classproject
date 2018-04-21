import React from 'react';
import { Link } from "react-router-dom";

export default class Footer extends React.Component{
    render(){
        return(
            <footer className="footer" id="footer">
            		<div clasNames="container">
            			<div className="row text-center text-xs-center text-sm-left text-md-left">
            				<div className="col-xs-12 col-sm-6 col-md-6">
            					<h5>Quick Links</h5>
            					<p>Professionally Managed By:<br/>
            					   Affinity Management Services<br/>
            					   1430 NW 15th Ave<br/>
            					   Miami, FL 33125<br/>
            					   P: 305-325-4243<br/>
            					   E: CustomerCare@ManagedByAffinity.com</p>
            				</div>
            				<div className="col-xs-12 col-sm-6 col-md-6">
            					<h5>Important Links</h5>
            					<ul className="list-unstyled quick-links">
            						<li><a href="javascript:void();">Miami Dade County</a></li>
            						<li><a href="javascript:void();">Emergency Preparedness</a></li>
            						<li><a href="javascript:void();">Property Taxes</a></li>
        						</ul>
            				</div>
            				
            			</div>
    				</div>
            </footer>
        )
    }
}
        