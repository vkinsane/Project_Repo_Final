import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardImg,
  // Button,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import axios from "axios";
import defaultProfilePic from "../assets/profile-pic.png";

class Home2 extends Component {
  state = {
    feed: [],
    allMembers: [],
  };
  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/1/posts`)
      .then((res) => {
        this.setState({ feed: res.data });
      })
      .catch((errors) => {
        console.error(errors);
      });

    axios
      .get(`http://localhost:5000/user/`)
      .then((res) => {
        this.setState({ allMembers: res.data });
      })
      .catch((errors) => {
        console.error(errors);
      });
  }

  render() {
    return (
      <Container fluid>
        <br />
        <br />
        <Row>
          {/* Feed/Posts */}
          <Col lg={{ span: 5, offset: 1 }} style={{ border: "1px solid red" }}>
            {this.state.feed.map((eachPost) => {
              return (
                <React.Fragment key={eachPost.id}>
                  <Card className="mt-3" border="primary">
                    <Card.Header>
                      {"{UserPic}"} {"{UserName}"} UserId : {eachPost.userId}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        {"{Remove}"} Post id : {eachPost.id}
                      </Card.Title>
                      <Card.Text>Post image : {"{Image}"}</Card.Text>
                      <Card.Text>Post Body : {eachPost.body}</Card.Text>

                      <Row>
                        <Col className="col-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="bi bi-heart"
                            viewBox="0 0 20 20"
                          >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                          </svg>
                        </Col>
                        <Col className="col-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="bi bi-chat-right-text-fill"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
                          </svg>
                        </Col>
                      </Row>
                      <hr />
                      <Row>
                        <Col className="col-10">
                          <InputGroup className="mb-3">
                            <FormControl placeholder="Leave a comment" />
                          </InputGroup>
                        </Col>
                        <Col className="col-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            className="bi bi-chat-right-text-fill mt-2"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
                          </svg>
                        </Col>
                      </Row>
                      <hr />
                      {/* Comment */}
                    </Card.Body>
                  </Card>
                </React.Fragment>
              );
            })}
          </Col>
          {/* Members */}
          <Col lg={{ span: 4, offset: 1 }} style={{ border: "1px solid blue" }}>
            {this.state.allMembers.map((eachMember) => {
              return (
                <React.Fragment key={eachMember.id}>
                  <Card className="mt-3" border="primary">
                    <Card.Body>
                      <Row style={{ flexWrap: "nowrap" }}>
                        <Col className="px-lg-2 px-md-2 px-sm-0 px-0 col col-lg-2 col-md-2 col-sm-2 col-xs-2">
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
                          className="col col-lg-7 col-md-7 col-sm-7 col-xs-7"
                          style={{ border: "1px solid black", margin: "auto" }} //margink : auto  to vertically center align rows
                        >
                          <Row>{eachMember.name}</Row>
                          <Row>{eachMember.email}</Row>
                        </Col>
                        <Col
                          className="px-lg-2 px-md-2 px-sm-2 px-0 col col-lg-3 col-md-3 col-sm-3 col-xs-3"
                          style={{ border: "1px solid black", margin: "auto" }}
                        >
                          <Button>Follow</Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </React.Fragment>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home2;