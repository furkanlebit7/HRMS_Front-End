import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class JobAdvertisementFilterBox extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Filter Box</Card.Title>
          <Card.Text>Here will be update</Card.Text>
          <Button variant="primary">Filter</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default JobAdvertisementFilterBox;
