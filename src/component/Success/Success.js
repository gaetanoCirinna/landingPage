import React, { Component } from "react";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

import MaterialIcon, { colorPalette } from "material-icons-react";

class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="no-fill">
        <Row>
          <Col lg="12">
            <div className="success" style={this.props.displayModal}>
              <div className="success__cover"></div>
              <div className="success__content no-fill">
                <div
                  className="success__icon no-fill"
                  onClick={this.props.closeModal}
                >
                  <MaterialIcon
                    icon="close"
                    size="large"
                    color={colorPalette.red._600}
                  />
                </div>
                <Card className="text-center">
                  <Card.Header>Iscrizione completata!</Card.Header>
                  <Card.Body>
                    <Card.Title>Robe a caso in titolo</Card.Title>
                    <Card.Text>
                      Un testo random che dice cose totalmente fuorvianti e
                      simpaticamente sensuali.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Success;
