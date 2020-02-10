import React, { Component } from "react";
import {
  Container,
  Row,
  Button,
  FormControl,
  Form,
  NavDropdown,
  Nav,
  Navbar,
  Col
} from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid="true" className="no-fill ">
        <Row>
          <Col lg="12">
            <div className="header__navbar no-fill">
              <Navbar bg="" expand="lg">
                <Navbar.Brand href="#" className="header__logo">
                  LOGO
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <div className="header__nav-collapse">
                    <Nav className="mr-auto">
                      <Nav.Link
                        href="#home"
                        className="header__nav-collapse__item"
                      >
                        HOME
                      </Nav.Link>
                      <Nav.Link
                        href="#link"
                        className="header__nav-collapse__item"
                      >
                        LINK
                      </Nav.Link>
                    </Nav>
                  </div>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
