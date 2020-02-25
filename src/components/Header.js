import React from "react";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { makeStyles } from "@material-ui/core/styles";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import { Link, NavLink } from "react-router-dom";
import { Link as LinkMaterial } from "@material-ui/core";
import "./styles/Navbar.css";
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

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb");
}

function handleDragOver(e) {
  var red = "#FF4500";
  var el = document.getElementById("colorstext");
  el.style.color = red;
}

function handleMouseOut(e) {
  var red = "#757575";
  var el = document.getElementById("colorstext");
  el.style.color = red;
}

function HeaderPortafolio() {
  const classes = useStyles();
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <Link className="Navbar__brand" to="/">
          <LinkMaterial color="inherit" className={classes.link}>
            <AllInclusiveIcon className={classes.icon} />
            Giorgio
          </LinkMaterial>
        </Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="#">
            1
          </Link>
          <Link className="nav-item nav-link" to="#">
            1
          </Link>
          <Link className="nav-item nav-link" to="#">
            1
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderPortafolio;
