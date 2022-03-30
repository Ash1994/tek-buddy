import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../App.css";
import Home from "./Home";
import QueAns from "./Que-Ans";
import ProfileCreation from "./Profile-Creation";

class TabBar extends Component {
  tabBar_style = {
    height: "auto",
    minHeight: "18rem",
  };
  render() {
    return (
      <div style={this.tabBar_style}>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            <Home></Home>
          </Tab>
          <Tab eventKey="QA" title="Knowledge Center">
            <QueAns></QueAns>
          </Tab>
          <Tab eventKey="Prf" title="Profile">
            <ProfileCreation></ProfileCreation>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default TabBar;
