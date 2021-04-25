import React, { Component } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
// import gokuUi from "../assets/goku.jpg";
import astronaut from "../assets/astronaut.jpg";

class Home extends Component {
  render() {
    // var showAlert;
    // if (localStorage.getItem("newUser") === "1") {
    //   console.log("Show New User Alert");
    // showAlert = true;
    // }
    return (
      <React.Fragment>
        <br />
        <br />
        {/* {showAlert && (
          <Alert variant="primary">New Account Created! Login </Alert>
        )} */}
        <Row>
          <Col
            // lg={{ span: 6, offset: 3 }}
            className="container col col-lg-6 col-md-8 col-sm-10 col-xs-11"
          >
            <Card>
              <Card.Img
                //src={gokuUi}
                src={astronaut}
                style={{ width: "" }}
              />
              <Card.Body>
                <Card.Title>Mern Social</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" block>
                  Welcome!!!
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Home;
