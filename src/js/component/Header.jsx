import React from 'react';
import { Link } from "react-router-dom";

export default class Header extends React.Component{
    render(){
        return(
            <div>
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                      {/*<!-- Indicators -->*/}
                      <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                      </ol>
                    
                     {/*<!-- Wrapper for slides -->*/}
                      <div class="carousel-inner" role="listbox">
                        <div class="item active">
                          <img src="http://cuteimages.net/data/2015/11/i--8217-m-just-a-little-husky-dogs-cuteimages.net.jpg" alt="Chania"/>
                          <div class="carousel-caption">
                            <h3>Chania</h3>
                            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
                          </div>
                        </div>
                    
                        <div class="item">
                          <img src="http://cuteimages.net/data/2015/11/inception-chihuahua-puppies-cuteimages.net.jpg" alt="Chania"/>
                          <div class="carousel-caption">
                            <h3>Chania</h3>
                            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
                          </div>
                        </div>
                    
                    </div>
                    
                     {/* <!-- Left and right controls -->*/}
                      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                </div>
            </div>
        );
    }
}