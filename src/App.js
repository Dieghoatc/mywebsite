import React from "react";
import "./App.css";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";


import fondo from './images/thejoker2.jpg'

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click = {this.backdropClickHandler} />;
    }

    return (
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}></Toolbar>
        {sideDrawer}
        {backdrop}
        <div className="fondo"><img src={fondo} alt="" srcset=""/></div>
        <main style={{ marginTop: "64px" }}>
          <p>esta </p>
        </main>
      </div>
    );
  }
}

export default App;
