import React, { Component } from "react";
import "../App.css";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

class Header extends Component {
  state = {
    modalShow: false,
    setModalShow: false,
  };

  header_Style = {
    Align: "Center",
  };

  image_style = {
    height: "3rem",
    width: "7rem",
  };

  container_style = {
    display: "flex",
    justifyContent: "center",
  };

  render() {
    return (
      <div>
        <Navbar bg="light" style={this.header_Style}>
          <Container style={this.container_style}>
            <Navbar.Brand href="#home">
              <img
                style={this.image_style}
                alt=""
                src={require("./TEKBuddy.png")}
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
