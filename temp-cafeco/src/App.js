import React, { Component } from "react";
import {BrowserRouter as Router, Route } from "react-router-dom"

import restaurantdash from "./screens/restaurantdash.js"
import restaurantlogin from "./screens/restaurantlogin.js"
import restaurantreviews from "./screens/restaurantreviews.js"

import "./styles/restaurantdash.css"
import "./styles/restaurantlogin.css"
import "./styles/restaurantreviews.css"


class App extends Component {
    render() {
        return (
            <Router>
                <Route path = "/" exact component = {restaurantdash}>
                </Route>

                <Route path = "/login" exact component = {restaurantlogin}>
                </Route>

                <Route path = "/reviews" exact component = {restaurantreviews} >
                </Route>
            </Router>

        )
    }

}

export default App;
