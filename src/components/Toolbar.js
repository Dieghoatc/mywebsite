import React from "react";
import { Link } from "react-router-dom";

import DrawerToggleButton from "./DrawerToggleButton";
import "./styles/Toolbar.css";

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_nav">
      <div>
        <DrawerToggleButton
          click={props.drawerClickHandler}
        ></DrawerToggleButton>
      </div>
      <div className="toolbar_logo font-weight-bold">
        <Link to="/">Dieghoatc</Link>
      </div>
      <div className="spacer"></div>
      <div className="toolbar_nav_items">
        <ul>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
export default Toolbar;
