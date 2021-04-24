import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  //Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import axios from "axios";
class Home2 extends Component {
  state = {
    feed: [],
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
                        <Col className="col-11">
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
            Members
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home2;
