import React from "react";
import NavbarPorfolio from "./Navbar";

function Layout(props) {
  return (
    <React.Fragment>
      <NavbarPorfolio />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
