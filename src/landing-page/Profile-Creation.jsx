import React, { Component } from "react";
import { Button, Form, Table } from "react-bootstrap";

class ProfileCreation extends Component {
  state = {
    skills: [],
  };

  body_style = {
    width: "20rem",
    marginLeft: "0.8rem",
    marginTop: "0.8rem",
  };

  table_style = {
    marginTop: "0.8rem",
  };

  render() {
    return (
      <div style={this.body_style}>
        <Form>
          {/* <Form.Group className="mb-1" controlId="nameId">
            <Form.Control
              type="text"
              placeholder="User Name"
              ref={(node) => (this.name = node)}
            />
          </Form.Group>
          <Form.Group className="mb-1" controlId="emailId">
            <Form.Control
              type="text"
              placeholder="User Email"
              ref={(node) => (this.email = node)}
            />
          </Form.Group> */}
          <Form.Label>Add your Technical Skills</Form.Label>
          <Form.Group className="mb-1" controlId="SkillsId">
            <Form.Control
              type="text"
              placeholder="Technical skill"
              ref={(node) => (this.skills = node)}
            />
          </Form.Group>
          <br></br>
          <Button variant="primary" onClick={this.addRow}>
            Add
          </Button>
          <Table striped bordered hover style={this.table_style}>
            <thead>
              <tr>
                <th>Skills</th>
              </tr>
            </thead>
            <tbody>{this.getRecords()}</tbody>
          </Table>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }

  addRow = () => {
    console.log(this.skills.value);
    var rows = this.state.skills;
    rows.push(this.skills.value);
    this.setState({ skills: rows });
  };

  getRecords() {
    if (this.state.skills.length === 0) return " ";
    return this.state.skills.map((data) => (
      <tr>
        <td>{data}</td>
      </tr>
    ));
  }
}

export default ProfileCreation;
