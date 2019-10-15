import React from "react";

import Toolbar from "./Toolbar";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";

class Layout1 extends React.Component {
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
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <React.Fragment>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}></Toolbar>
        {sideDrawer}
        {backdrop}
        {this.props.children}
      </React.Fragment>
    );
  }
}
export default Layout1;
