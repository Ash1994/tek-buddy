import React, { Component } from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import DataService from "../services/data.service";
import CardComponent from "./Card-Component";
import RatingComponent from "./Rating";

class QueAns extends Component {
  body_style = {
    width: "80rem",
    marginLeft: "0.8rem",
    marginTop: "0.8rem",
  };

  button_style = {
    marginTop: "0.8rem",
  };

  badge_style = {
    marginLeft: "5rem",
    marginBottom: "0.5rem",
    height: "1.5rem",
  };

  state = {
    tagPerson: [
      {
        personName: "Ashwin Mahatkar",
        personId: "amahatkar@teksystems.com",
      },
      {
        personName: "Gautham Nayak",
        personId: "ganayak@teksystems.com",
      },
      {
        personName: "Manasa Janamanchi",
        personId: "mjanamanchi@teksystems.com",
      },
      {
        personName: "Ganesh Hariharan",
        personId: "gharihar@teksystems.com",
      },
    ],
    allQuesAns: [],
  };

  constructor(props) {
    super(props);
    this.getAllQuesAns = this.getAllQuesAns.bind(this);
  }

  componentDidMount() {
    this.getAllQuesAns();
  }

  render() {
    return (
      <div style={this.body_style}>
        <Container>
          <Row>
            <Col>
              <Form onSubmit={this.submitQueAnsDetail}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Add your solution</Form.Label>
                  <br></br>
                  <br></br>
                  <Form.Label>Question</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    ref={(node) => (this.question = node)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Answer</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    ref={(node) => (this.answer = node)}
                  />
                </Form.Group>
                <Form.Group className="mb-1" controlId="skillId">
                  <Form.Control
                    type="text"
                    placeholder="Skill"
                    ref={(node) => (this.skill = node)}
                  />
                </Form.Group>
                <Form.Select
                  aria-label="Default select example"
                  ref={(node) => (this.opSelect = node)}
                >
                  <option>Tag person</option>
                  {this.state.tagPerson.map((data) => (
                    <option key={data.personId}>{data.personName}</option>
                  ))}
                </Form.Select>
                <br></br>
                <RatingComponent></RatingComponent>
                <Button
                  variant="primary"
                  type="submit"
                  style={this.button_style}
                >
                  Submit
                </Button>
              </Form>
            </Col>
            <Col>
              <Badge pill bg="primary" style={this.badge_style}>
                Recently solved technical problems
              </Badge>{" "}
              {this.state.allQuesAns.map((data) => (
                <CardComponent
                  key={data.id}
                  rating={data.rating}
                  card_detail={[
                    {
                      subTitle: "Question",
                      subTitle_content: data.question,
                      key: 1,
                    },
                    {
                      subTitle: "Answer",
                      subTitle_content: data.answer,
                      key: 2,
                    },
                    {
                      subTitle: "Skills",
                      subTitle_content: data.skill,
                      key: 3,
                    },
                  ]}
                ></CardComponent>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  getAllQuesAns() {
    DataService.getAllQuesAns()
      .then((response) => {
        this.setState({
          allQuesAns: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  getOpSelectDetails(input) {
    return this.state.tagPerson.filter((data) => data.personName === input);
  }

  submitQueAnsDetail = (event) => {
    event.preventDefault();
    const ques_profile = this.getOpSelectDetails(this.opSelect.value);
    console.log(ques_profile[0]);
    const data = {
      question: this.question.value,
      answer: this.answer.value,
      skill: this.skill.value,
      ques_profile_id: ques_profile[0].personId,
      ques_profile_name: ques_profile[0].personName,
    };

    DataService.saveQuesAns(data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export default QueAns;
