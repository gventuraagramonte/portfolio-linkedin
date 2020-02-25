import React from "react";
import { Link as LinkMaterial } from "@material-ui/core";

import "./styles/Badges.css";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <div className="Badges__hero min-vh-100 my-0">
        <div className="container">
          <div className="row">
            <Col>
              <Jumbotron>
                <h1>Giorgio Ventura</h1>
                <h2>Full Stack Web Developer</h2>
                <p>
                  HTML/CSS | Bootstrap | JavaScript | React | Redux | NodeJS |
                  Express | MongoDB | SQL Server | Python | Django | AWS
                </p>
              </Jumbotron>
            </Col>
            <Container className="social_link">
              <Row>
                <Col sm>
                  <LinkMaterial
                    className="classes_link"
                    href="https://www.linkedin.com/in/giorgio-ventura-agramonte-67250213/"
                  >
                    <LinkedInIcon className="classes_icon" />
                    LinkedIn
                  </LinkMaterial>
                </Col>
                <Col sm>
                  <LinkMaterial
                    className="classes_link"
                    href="https://github.com/gventuraagramonte"
                  >
                    <GitHubIcon className="classes_icon" />
                    Github
                  </LinkMaterial>
                </Col>
                <Col sm>
                  <LinkMaterial className="classes_link" href="#">
                    <FacebookIcon className="classes_icon" />
                    Facebook
                  </LinkMaterial>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
