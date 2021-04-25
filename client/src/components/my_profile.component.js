// import React, {
//   useState,
//   // useEffect
// } from "react";

import {
  Nav,
  Card,
  Col,
  Row,
  Container,
  CardImg,
  Jumbotron,
  Button,
  // Tabs,
  // Tab,
} from "react-bootstrap";

//image
import defaultProfilePic from "../assets/profile-pic.png";
import React, { Component } from "react";
import axios from "axios";

class MyProfile extends Component {
  state = {
    tab: "posts",
    userData: {},
  };
  ContentTabsSelector = (tab) => {
    switch (tab) {
      case "posts":
        return (
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        );
      // break;
      case "following":
        return (
          <Jumbotron>
            <h1>Hello World</h1>
          </Jumbotron>
        );
      // break;
      case "followers":
        return (
          <Jumbotron>
            <h1>Hello, followers!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        );
      // break;

      default:
        break;
    }
  };
  componentDidMount() {
    axios
      .get(`http://localhost:5000/user/${localStorage.getItem("userId")}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({ userData: res.data });
      })
      .catch((errors) => {
        console.error(errors);
      });
  }

  // const [tab,  this.setState] = useState("posts");
  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <Container fluid>
          <Row>
            <Col
              // style={{ border: "1px solid black" }}
              lg={{ span: 6, offset: 3 }}
              md={{ span: 8, offset: 2 }}
              sm={{ span: 10, offset: 1 }}
              xs={{ span: 12, offset: 0 }}
            >
              <Card border="secondary">
                <Card.Header>Profile</Card.Header>
                <Card.Body>
                  <Row style={{ flexWrap: "nowrap" }}>
                    <Col
                      className="px-lg-2 px-md-2 px-sm-0 px-0 col col-lg-2 col-md-2 col-sm-2 col-xs-2"
                      style={{ border: "1px solid black" }}
                    >
                      <CardImg
                        // className="p-2"
                        style={{
                          borderRadius: "50%",
                          height: "100%",
                          minWidth: "100%",
                        }}
                        src={defaultProfilePic}
                      />
                    </Col>
                    <Col
                      className="col col-lg-8 col-md-8 col-sm-8 col-xs-8"
                      style={{ border: "1px solid black", margin: "auto" }} //margink : auto  to vertically center align rows
                    >
                      <Row style={{ border: "1px solid black" }}>
                        {this.state.userData.name}
                      </Row>
                      <Row style={{ border: "1px solid black" }}>
                        {this.state.userData.email}
                      </Row>
                    </Col>
                    <Col
                      className="px-lg-2 px-md-2 px-sm-2 px-0 col col-lg-1 col-md-1 col-sm-1 col-xs-1"
                      style={{ border: "1px solid black", margin: "auto" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        className="bi bi-pencil-fill text-success"
                        viewBox="0 0 20 20"
                      >
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                      </svg>
                    </Col>
                    <Col
                      className="px-lg-2 px-md-2 px-sm-2 px-0 col col-lg-1 col-md-1 col-sm-1 col-xs-1"
                      style={{ border: "1px solid black", margin: "auto" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        className="bi bi-trash-fill text-warning"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    </Col>
                  </Row>
                  <hr />
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <Card.Text style={{ border: "1px solid black" }}>
                    <Nav
                      style={{ border: "1px solid black", margin: "auto" }}
                      justify
                      variant="pills"
                      defaultActiveKey="posts"
                    >
                      <Nav.Item>
                        <Nav.Link
                          eventKey="posts"
                          onClick={() => {
                            this.setState({ tab: "posts" });
                          }}
                        >
                          POSTS
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="following"
                          onClick={() => {
                            this.setState({ tab: "following" });
                          }}
                        >
                          FOLLOWING
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="followers"
                          onClick={() => {
                            this.setState({ tab: "followers" });
                          }}
                        >
                          FOLLOWERS
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card.Text>
                  <Card.Text style={{ border: "1px solid black" }}>
                    {this.ContentTabsSelector(this.state.tab)}
                  </Card.Text>
                  {/* <ControlledTabs /> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default MyProfile;
