import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function newsFeed() {
  console.log("data loaded");
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((my_data) => console.log(my_data));
}

function Home2() {
  return (
    <Container fluid>
      <br />
      <br />
      <Row>
        <Col lg={{ span: 5, offset: 1 }} style={{ border: "1px solid red" }}>
          Feed
          {() => {
            newsFeed();
          }}
        </Col>
        <Col lg={{ span: 4, offset: 1 }} style={{ border: "1px solid blue" }}>
          Members
        </Col>
      </Row>
    </Container>
  );
}

export default Home2;
