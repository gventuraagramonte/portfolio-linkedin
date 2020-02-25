import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

class ContactPortfolio extends Component {
  render() {
    return (
      <div className="Badges__hero min-vh-100 my-0">
        <div className="contact-body">
          <div>
            <Container className="contact-grid">
              <Row>
                <Col sm={6}>
                  <h2>Giorgio Ventura</h2>
                  <Image
                    src="https://i.pinimg.com/280x280_RS/53/67/1f/53671fc1e05f350e0fd27f2570299a20.jpg"
                    alt="avatar"
                    style={{
                      height: "200px",
                      borderRadius: "15px"
                    }}
                  />
                  <p
                    style={{ width: "75%", margin: "auto", paddingTop: "1em" }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries
                  </p>
                </Col>
                <Col sm={6}>
                  <h2>Contáctame</h2>
                  <hr />
                  <div>
                    <ListGroup>
                      <ListGroup.Item>
                        <PhoneIcon />
                        987245092
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <EmailIcon />
                        gventuraagramonte@gmail.com
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPortfolio;
