import React, { Component } from "react";
import "../App.css";
import { Container, Navbar } from "react-bootstrap";

class Footer extends Component {
  state = {};

  footer_style = {
    marginTop: "18rem",
  };

  container_style = {
    display: "flex",
    justifyContent: "center",
  };

  render() {
    return (
      <div style={this.footer_style}>
        <Navbar bg="light" style={this.header_Style}>
          <Container style={this.container_style}>
            <Navbar.Brand href="#home">
              © 2022-3022 StarTEK, LLC ALL RIGHTS RESERVED.
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
