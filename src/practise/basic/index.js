import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import LinkUs from "./components/link";

export default function BasicExample() {
    return (
        <Router>
            <div style={{display:'flex',flexDirection:'column'}}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/dashboard">Dashboard</Link>
                <hr/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/dashboard">
                        <LinkUs/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

