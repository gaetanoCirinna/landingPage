import React, { Component } from "react";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

class LargeHero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid="true">
        <Row>
          <Col lg="12">
            <div className="large-hero__bg">
              <h1>Main title</h1>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LargeHero;
