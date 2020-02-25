import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  link: {
    display: "flex"
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20
  }
}));
function NavbarPorfolio() {
  const classes = useStyles();
  return (
    <Navbar bg="light" expand="lg">
      <Link className="navbar-brand" to="/">
        Portfolio
      </Link>
      {/* <Navbar.Brand href="/">Portfolio</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/resume">
            <WhatshotIcon className={classes.icon} />
            Resume
          </Link>
          <Link className="nav-link" to="/aboutme">
            <WhatshotIcon className={classes.icon} />
            About Me
          </Link>
          <Link className="nav-link" to="/projects">
            <WhatshotIcon className={classes.icon} />
            Projects
          </Link>
          <Link className="nav-link" to="/contact">
            <WhatshotIcon className={classes.icon} />
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarPorfolio;
