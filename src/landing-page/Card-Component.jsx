import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BsFillStarFill } from "react-icons/bs";

class CardComponent extends Component {
  state = {};
  cardComponent_style = {
    width: "30rem",
    marginLeft: "5rem",
    marginTop: "1rem",
  };

  cardBody_style = {
    marginTop: "0.8rem",
  };

  icon_style = {
    marginLeft: "0.5rem",
  };

  render() {
    return (
      <div>
        <Card style={this.cardComponent_style}>
          <Card.Body>
            <Badge bg="secondary">{this.props.rating}</Badge>
            <BsFillStarFill style={this.icon_style}></BsFillStarFill>
            {this.props.card_detail.map((data) => (
              <div key={data.key} style={this.cardBody_style}>
                <Card.Subtitle className="mb-2 text-muted">
                  {data.subTitle}
                </Card.Subtitle>
                <Card.Text>{data.subTitle_content}</Card.Text>
              </div>
            ))}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CardComponent;
