import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Layout from "./Layout";

import RickandMorty from "../projects/RickandMorty"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
        <Route exact path="/" component={Home}></Route>
          <Route exact path="/aboutme" component={AboutMe}></Route>
          <Route excact path = "/RickandMorty" component = {RickandMorty}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
