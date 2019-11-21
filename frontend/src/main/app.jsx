import React from "react";
import Menu from "../template/menu";
import Routes from "./routes";
import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";
import "../template/template.model.css"

export default () => (
  <div className="App">
    <Menu></Menu>
    <div className="container">
      <Routes></Routes>
    </div>
  </div>
);
