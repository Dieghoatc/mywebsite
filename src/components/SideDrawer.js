import React from "react";
import {Link} from 'react-router-dom';

import "./styles/SideDrawer.css";
import logo from "./../images/Logo.png";
import Github from ".././images/social/github.svg";
import Instagram from "./../images/social/instagram.svg";
import Twitter from "./../images/social/twitter.svg";
import Linkedin from "./../images/social/linkedin.svg";
import Medium from "./../images/social/medium.svg";

class SideDrawer extends React.Component {
  render() {
    return (
      <div className="side-drawer">
        <div className="container">
          <div className="row ">
            <div className="col-12 text-center">
              <img clasname="rounded" src={logo} alt="logo" srcSet={logo} />
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <ul>
                  <li>
                    <Link to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link to="/aboutme">Sobre mi</Link>
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
                  <li>
                    <a href="https://github.com/Dieghoatc">
                      <img
                        src={Github}
                        srcSet={Github}
                        alt="GitHub"
                        srcset=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/dieghoatc/">
                      <img src={Instagram} srcSet={Instagram} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Dieghoatc">
                      <img src={Twitter} srcSet={Twitter} alt="Twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/dieghoatc/">
                      <img src={Linkedin} srcSet={Linkedin} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/@dieghoatc">
                      <img src={Medium} alt="medium" srcSet={Medium} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 text-center mt-3 font-italic">
                <p>“No creo en el destino <br></br>porque odio pensar que no soy yo <br></br> quien controla mi vida.”<br></br>The Matrix</p>                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
