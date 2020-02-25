import React, { Component } from "react";
import ReactLogo from "../images/ReactLogo.png";
import PythonLogo from "../images/PythonLogo.png";
import AngularLogo from "../images/AngularLogo.png";
import Tabs from "react-bootstrap/Tabs";
import { Tab } from "react-bootstrap";
import CardProjects from "./Card";
class Projects extends Component {
  render() {
    return (
      <div className="Badges__hero min-vh-100 my-0">
        <Tabs defaultActiveKey="javascript">
          <Tab eventKey="javascript" title="Javascript">
            <div className="Badges__hero min-vh-100 my-0">
              <div className="cards_project">
                <CardProjects title="React Projects" src={ReactLogo} />
                <CardProjects title="React Projects" src={ReactLogo} />
                <CardProjects title="React Projects" src={ReactLogo} />
                <CardProjects title="React Projects" src={ReactLogo} />
                <CardProjects title="React Projects" src={ReactLogo} />
                <CardProjects title="React Projects" src={ReactLogo} />
              </div>
            </div>
          </Tab>
          <Tab eventKey="python" title="Python">
            <div className="Badges__hero min-vh-100 my-0">
              <div className="cards_project">
                <CardProjects title="Python Projects" src={PythonLogo} />
                <CardProjects title="Python Projects" src={PythonLogo} />
                <CardProjects title="Python Projects" src={PythonLogo} />
              </div>
            </div>
          </Tab>
          <Tab eventKey="angular" title="Angular">
            <div className="Badges__hero min-vh-100 my-0">
              <div className="cards_project">
                <CardProjects title="Angular Projects" src={AngularLogo} />
                <CardProjects title="Angular Projects" src={AngularLogo} />
                <CardProjects title="Angular Projects" src={AngularLogo} />
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Projects;
