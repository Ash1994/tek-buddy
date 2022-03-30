import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import TabBar from "./tab-bar";

class Landing extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header></Header>
        <TabBar></TabBar>
        <Footer></Footer>
      </div>
    );
  }
}

export default Landing;
