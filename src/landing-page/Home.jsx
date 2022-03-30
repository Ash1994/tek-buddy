import React, { Component } from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import {
  Accordion,
  Badge,
  Button,
  Col,
  Container,
  Row,
  Toast,
} from "react-bootstrap";
import DataService from "../services/data.service";
import Table from "react-bootstrap/Table";
import { BsFillStarFill } from "react-icons/bs";

class Home extends Component {
  body_style = {
    width: "80rem",
    marginLeft: "0.8rem",
    marginTop: "0.8rem",
  };

  table_style = {
    marginTop: "0.8rem",
  };

  top_cont_skill_div_style = {
    display: "flex",
    flexWrap: "wrap",
  };

  top_cont_skill_badge__style = {
    marginLeft: "0.8rem",
  };

  col_2_style = {
    marginLeft: "10rem",
  };

  state = {
    listOfProfiles: [],
    lisOfAllProfiles: [],
  };

  icon_style = {
    marginLeft: "0.5rem",
  };

  toast_style = {
    width: "auto",
  };

  constructor(props) {
    super(props);
    this.getAllTopProfiles = this.getAllTopProfiles.bind(this);
  }

  componentDidMount() {
    this.getAllTopProfiles();
  }

  render() {
    return (
      <div>
        <div style={this.body_style}>
          <Container>
            <Row>
              <Col>
                <Form onSubmit={this.getProfilesBySkill}>
                  <Form.Group className="mb-1" controlId="searchId">
                    <Form.Control
                      type="text"
                      placeholder="Search Buddies for your technical problems"
                      ref={(node) => (this.skill = node)}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Search
                  </Button>
                </Form>
                {this.renderTableTags()}
              </Col>
              <Col style={this.col_2_style}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Top Contributors</Accordion.Header>
                    <Accordion.Body>
                      {this.state.lisOfAllProfiles.map((data) => (
                        <Toast style={this.toast_style}>
                          <Toast.Header closeButton={false}>
                            <img
                              src="holder.js/20x20?text=%20"
                              className="rounded me-2"
                              alt=""
                            />
                            <strong className="me-auto">{data.name}</strong>
                            <Badge bg="secondary">{data.rating}</Badge>
                            <BsFillStarFill
                              style={this.icon_style}
                            ></BsFillStarFill>
                          </Toast.Header>
                          <Toast.Body>
                            <div style={this.top_cont_skill_div_style}>
                              {data.skills.map((data) => (
                                <div style={this.top_cont_skill_badge__style}>
                                  <Badge bg="dark">{data}</Badge>
                                  {"  "}
                                </div>
                              ))}
                            </div>
                          </Toast.Body>
                        </Toast>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }

  renderTableTags = () => {
    if (this.state.listOfProfiles.length === 0) return "";
    return (
      <Table striped bordered hover style={this.table_style}>
        <thead>
          <tr>
            <th>Buddies</th>
            <th>Rating</th>
            <th>Help</th>
          </tr>
        </thead>
        <tbody>
          {this.state.listOfProfiles.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.rating}</td>
              <td>
                <a href={"MSTeams:/l/chat/0/0?users=" + data.email_id}>
                  Connect
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  getAllTopProfiles() {
    DataService.getAllTopProfiles()
      .then((response) => {
        this.setState({
          lisOfAllProfiles: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  getProfilesBySkill = (event) => {
    event.preventDefault();
    if (this.skill.value === "") return "";
    DataService.getProfilesBySkill(this.skill.value)
      .then((response) => {
        this.setState({
          listOfProfiles: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export default Home;
