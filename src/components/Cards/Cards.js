import React from "react";
import { Card } from "react-bootstrap";
import fuck from "../images/development.png";

function Cards(props) {
  return (
    <div className="">
      <Card
        style={{
          width: "20rem",
          backgroundColor: "#1b1b1b",
          height: "20rem",
          borderRadius: "20px 20px 20px 20px",
        }}
      >
        <Card.Img variant="top" src={props.Img} className="image" />
        <Card.Body className="card-body">
          <Card.Title className="card-title">{props.title}</Card.Title>
          <Card.Text className="card-text">{props.body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
