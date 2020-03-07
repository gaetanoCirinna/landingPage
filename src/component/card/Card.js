import React, { Component } from "react";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import MaterialIcon, { colorPalette } from "material-icons-react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row className="">
          <h1 className="card__main-title px-3">
            LOREM COSE PER ROBE IN POSTI E ALTRE COSE PER RIEMPIRE SPAZIO
          </h1>
          <Col lg="12" className="">
            <div className="card__element">
              <Row>
                <Col xs="3">
                  <div className="float-right card__icon">
                    <MaterialIcon icon="local_drink" size="large" />
                  </div>
                </Col>
                <Col xs="9">
                  <div className="card__element-text">
                    <h2>TITOLO CARD</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg="12" className="">
            <div className="card__element">
              <Row>
                <Col xs="3">
                  <div className="float-right card__icon">
                    <MaterialIcon icon="emoji_food_beverage" size="large" />
                  </div>
                </Col>
                <Col xs="9">
                  <div className="card__element-text">
                    <h2>TITOLO CARDjjnjnjnjW</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg="12" className="">
            <div className="card__element">
              <Row>
                <Col xs="3">
                  <div className="float-right card__icon">
                    <MaterialIcon icon="fastfood" size="large" />
                  </div>
                </Col>
                <Col xs="9">
                  <div className="card__element-text">
                    <h2>TITOLO CARD</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Card;
