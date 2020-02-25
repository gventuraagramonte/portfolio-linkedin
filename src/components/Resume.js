import React, { Component } from "react";
import Education from "./Education";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div className="Badges__hero min-vh-100 my-0">
        <Container>
          <Row>
            <Col sm={4} style={{ background: "white" }}>
              <div style={{ textAlign: "center" }}>
                <br />
                <Image
                  src="https://i.pinimg.com/280x280_RS/53/67/1f/53671fc1e05f350e0fd27f2570299a20.jpg"
                  alt="avatar"
                  style={{
                    height: "200px",
                    borderRadius: "15px"
                  }}
                />
              </div>
              <h2 style={{ paddingTop: "2em" }}>Giorgio Ventura</h2>
              <h4 style={{ color: "grey" }}>Programmer</h4>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              <h5>Address</h5>
              <p>1 Hacker Way Menlo Park, 94025</p>
              <h5>Phone</h5>
              <p>(123) 456-7890</p>
              <h5>Email</h5>
              <p>someone@example.com</p>
              <h5>Web</h5>
              <p>mywebsite.com</p>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            </Col>
            <Col sm={8} className="resume-right-col">
              <h2>Education</h2>
              <Education
                startYear={2012}
                endYear={2015}
                schoolName="IE USIL"
                schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <Education
                startYear={2012}
                endYear={2015}
                schoolName="IE USIL"
                schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <hr style={{ borderTop: "3px solid #e22947" }} />
              <h2>Experience</h2>
              <Experience
                startYear={2017}
                endYear={2019}
                jobName="First Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <Experience
                startYear={2017}
                endYear={2019}
                jobName="First Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <hr style={{ borderTop: "3px solid #e22947" }} />
              <h2>Skills</h2>
              <Skills skill="Javascript" variant="warning" now={100} />
              <Skills skill="HTML/CSS" variant="warning" now={80} />
              <Skills skill="Node" variant="warning" now={50} />
              <Skills skill="React" variant="warning" now={60} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Resume;
