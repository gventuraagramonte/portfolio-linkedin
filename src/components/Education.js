import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
class Education extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={4}>
            <p>
              {this.props.startYear}-{this.props.endYear}
            </p>
          </Col>
          <Col sm={8}>
            <h4>{this.props.schoolName}</h4>
            <p>{this.props.schoolDescription}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Education;
