import React, { Component } from "react";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Image } from "react-bootstrap";
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
                <Col xs="2" md="1">
                  <div className="float-right card__icon">
                    <MaterialIcon icon="local_drink" />
                  </div>
                </Col>
                <Col xs="10" md="11">
                  <div className="card__element-text">
                    <h2>TITOLO CARD</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec.
                    </p>
                    <Image
                      className="card__element-img"
                      src="https://www.iconmagazine.it/wp-content/uploads/2018/07/180710_Champagne-beer-950x514.jpg"
                      rounded
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg="12" className="">
            <div className="card__element">
              <Row>
                <Col xs="2" md="1">
                  <div className="float-right card__icon">
                    <MaterialIcon icon="emoji_food_beverage" />
                  </div>
                </Col>
                <Col xs="10" md="11">
                  <div className="card__element-text">
                    <h2>TITOLO CARD</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec.
                    </p>
                    <Image
                      className="card__element-img"
                      src="https://www.orderisda.org/wp-content/uploads/2018/02/iStock-627328628.jpg"
                      rounded
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg="12" className="">
            <div className="card__element">
              <Row>
                <Col xs="2" md="1">
                  <div className="float-right card__icon">
                    <MaterialIcon icon="fastfood" />
                  </div>
                </Col>
                <Col xs="10" md="11">
                  <div className="card__element-text">
                    <h2>TITOLO CARD</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec.
                    </p>
                    <Image
                      className="card__element-img"
                      src="https://www.siliconera.com/wp-content/uploads/2018/02/DVzEvGTV4AEvkN.jpg"
                      rounded
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <hr></hr>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Card;
