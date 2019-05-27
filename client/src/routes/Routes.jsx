import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "../Layout/Home/Home";
import About from "../Layout/About/About";
import NavBar from "../Layout/NavBar/NavBar";
import Add from "../Layout/Add/Add";
import Edit from "../Layout/Edit/Edit";
import ViewTree from "../Layout/ViewTree/ViewTree";
import Cart from "../Layout/Cart/Cart";
import LandscapeMockup from "../Layout/LandscapeMockup/LandscapeMockup"; 
import Footer from "../Layout/Footer/Footer";

const Routes = () => {
  return (
    <Fragment>
        <NavBar />
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/about" component={ About } exact />
          <Route path="/add" component={ Add } exact />
          <Route path="/edit" component={ Edit } exact />
          <Route path="/view" component={ ViewTree } exact />
          <Route path="/cart" component={ Cart } exact />
          <Route path="/landscapemockup" component={ LandscapeMockup } exact />
        </Switch>
        <br />
        <br />
        <Footer />
      </Fragment>
  );
};

export default Routes;
