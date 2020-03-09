import React, { Component } from "react";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Form, Button, Modal } from "react-bootstrap";

import Success from "./../Success/Success";

class SectionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      var: {
        display: "none"
      }
    };
  }

  showModal = () => {
    if (this.state.var.display === "block") {
      this.setState({
        var: {
          display: "none"
        }
      });
    } else {
      this.setState({
        var: {
          display: "block"
        }
      });
    }
  };

  render() {
    return (
      <Container className="bg-green" fluid={true}>
        <Row>
          <Col lg="12">
            <div className="sectionForm" id="sectionForm">
              <Success
                displayModal={this.state.var}
                closeModal={this.showModal}
              ></Success>
              <Form className="sectionForm__content">
                <Form.Group controlId="formBasicPiva">
                  <Form.Label>Partita IVA</Form.Label>
                  <Form.Control type="piva" placeholder="Partita IVA" />
                </Form.Group>
                <Form.Group controlId="formBasicAgency">
                  <Form.Label>Agenzia</Form.Label>
                  <Form.Control type="agency" placeholder="Agenzia" />
                </Form.Group>
                <Form.Group controlId="formBasicAddress">
                  <Form.Label>Indirizzo</Form.Label>
                  <Form.Control type="address" placeholder="Indirizzo" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <span>
                    Leggi l'informativa sulla <a href="#">privacy</a>
                  </span>

                  <Form.Check type="checkbox" label="Clicca per accettare" />
                </Form.Group>
                <Button
                  className="btn sectionForm__btn"
                  onClick={this.showModal}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SectionForm;
