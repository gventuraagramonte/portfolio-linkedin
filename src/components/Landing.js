import React, { Component } from "react";
import {
  Grid,
  TableContainer,
  Paper,
  Table,
  TableHead
} from "@material-ui/core";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <div className="banner-text">
                  <h1>Full Stack Web Developer</h1>
                </div>
              </TableHead>
              <TableContainer>
                <p>
                  HTML/CSS | Bootstrap | JavaScript | React | React Native |
                  NodeJS | Express | MongoDB | Django | Python | AWS
                </p>
              </TableContainer>
            </Table>
          </TableContainer>
        </Grid>
      </div>
    );
  }
}

export default Landing;
