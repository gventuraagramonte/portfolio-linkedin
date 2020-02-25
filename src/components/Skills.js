import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

class Skills extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12}>
            <div style={{ display: "flex" }}>{this.props.skill} </div>
          </Col>
          <Col sm={12}>
            <ProgressBar
              striped
              variant={this.props.variant}
              now={this.props.now}
              animated
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Skills;
