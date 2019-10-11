import React from "react";

import "./styles/SideDrawer.css";
import logo from "../../images/Logo.png";
import Github from "../../images/social/github.svg"
import Instagram from "../../images/social/instagram.svg"
import Twitter from "../../images/social/twitter.svg"
import Linkedin from "../../images/social/linkedin.svg"
class SideDrawer extends React.Component {
  render() {
    return (
      <div className="side-drawer">
        <div className="container">
          <div className="row ">
            <div className="col-12 text-center">
              <img clasname="rounded" src={logo} alt="logo" />
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <ul>
                  <li>
                    <a href="/">Inicio</a>
                  </li>
                  <li>
                    <a href="/">Sobre mi</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 m-2">
                <p className="text-center font-weight-bold">
                  Engineer || Software Dev <br></br> Life long learning.
                </p>
              </div>
              <div className="col-12 img-logo text-center">
                  <ul>
                      <li><a href="https://github.com/Dieghoatc"><img src= {Github} alt="GitHub" srcset=""/></a></li>
                      <li><a href="https://www.instagram.com/dieghoatc/"><img src= {Instagram} alt="Instagram"/></a></li>
                      <li><a href="https://twitter.com/Dieghoatc"><img src= {Twitter} alt="Twitter"/></a></li>
                      <li><a href="https://www.linkedin.com/in/dieghoatc/"><img src={Linkedin} alt=""/></a></li>
                  </ul>
              </div>
              <div className="col-12 text-center fixed-bottom">
                  <p>Copyright - Dieghoatc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
