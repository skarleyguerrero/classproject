import React from 'react';
import { Link } from "react-router-dom";

export default class Footer extends React.Component{
    render(){
        return(
            <footer className="footer" id="footer">
        	<div className="container">
                <div className="row justify-content-between">
                    <div className="col-6">
                        <img className="img-fluid" src="https://placehold.it/50x50" alt="" />
                    </div>
                    <div className="col-6">
                        <ul className="footer__links list-inline text-right">
                            <li className="footer__link list-inline-item">Blog</li>
                            <li className="footer__link list-inline-item">Contact Us</li>
                        </ul>
                    </div>
        		</div>
        	</div>
            </footer>
        )
    }
}
        