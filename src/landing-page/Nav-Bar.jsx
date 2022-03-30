import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

export default class AppNavbar extends Component {
  nav_style = {
    marginLeft: "0.8rem",
  };
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/" style={this.nav_style}>
          TEK-Buddy
        </NavbarBrand>
      </Navbar>
    );
  }
}
