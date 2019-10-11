import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./style/Toolbar.css";

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_nav">
      <div>
        <DrawerToggleButton
          click={props.drawerClickHandler}
        ></DrawerToggleButton>
      </div>
      <div className="toolbar_logo">
        <a href="/">Dieghoatc</a>
      </div>
      <div className="spacer"></div>
      <div className="toolbar_nav_items">
        <ul>
          <li>
            <a href="https://dieghoatc.wordpress.com/">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
export default Toolbar;
