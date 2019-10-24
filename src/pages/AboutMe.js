import React from "react";

import "./styles/AboutMe.css";

import About from "../components/about/About";
import Education from "../components/about/Education";
import Experience from "../components/about/Experience";
import Certificates from "../components/about/Certificates";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="container AboutMe-Container mt-3">
        <div className="row">
          <div className="col-12 col-md-8 AboutMe-Info">
            <Education></Education>
            <Experience></Experience>
            <Certificates></Certificates>
          </div>
          <div className="col-12 col-md-4 AboutMe-Info">
            <About></About>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMe;
