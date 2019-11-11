import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";
import Todo from "../components/todo/todo"
import About from "../components/about/about"

export default () => (
    <Router history={hashHistory}>
        <Route path="/todos" component={Todo}></Route>
        <Route path="/about" component={About}></Route>
        <Redirect from="*" to="/todos"></Redirect>
    </Router>
)
