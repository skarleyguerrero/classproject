import React from 'react';
import Flux from "@4geeksacademy/react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Amenities from "./views/Amenities.jsx";
import Contact from "./views/Contact.jsx";
import Events from "./views/Events.jsx";
import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import Actions from './actions/Actions.jsx'


export default class Router extends Flux.View {
    constructor () {
      super();
    }
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/index.html" component={Home} />
              <Route exact path="/amenities" component={Amenities} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route render={() => <h1>Not found!</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
