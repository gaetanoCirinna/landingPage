import React, { Component } from "react";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button } from "react-bootstrap";

class LargeHero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid="true" className="">
        <Row>
          <Col lg="12" className="p-0">
            <div className="large-hero__bg">
              <div className="large-hero__main-title p-2">
                <h1>
                  Main title titolo tiotlo cose importanti. Scrivo altre cose
                  per provare la larghezza della colonna.{" "}
                </h1>
                <p>Ciao Eleonora ciao ciao ciao ciao ciao sottotitolo.</p>

                <Button variant="info" size="lg" block href="#sectionForm">
                  Button!
                </Button>
              </div>

              <div className="large-hero__filter"></div>
              <div className="large-hero__img"></div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LargeHero;
