import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import DiplomaPython from "../images/DiplomaPython.PNG";
import DiplomaNodeJS from "../images/DiplomaNodeJS.PNG";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  }
}));

/**Api rustica */
const tileData = [
  {
    img: DiplomaPython,
    title: "Diploma Python",
    author: "Giorgio Ventura",
    cols: 2
  },
  {
    img: DiplomaNodeJS,
    title: "Diploma NodeJS",
    author: "Giorgio Ventura",
    cols: 2
  }
];
function About() {
  const classes = useStyles();

  return (
    <div className="Badges__hero min-vh-100 my-0">
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

export default About;
