import {
  Nav,
  Card,
  Col,
  Row,
  Container,
  CardImg,
  Jumbotron,
} from "react-bootstrap";

import defaultProfilePic from "../assets/profile-pic.png";
import React, { Component } from "react";
import axios from "axios";
import ImageHelper from "./image_helper.component";

class MyProfile extends Component {
  state = {
    tab: "posts",
    userData: {},
    followingData: [],
    followingIds: [],
    redirect: false,
    feed: [],
  };

  nameDecoder = (eachId) => {
    axios.get(`http://localhost:5000/user/${eachId}`).then((res) => {
      return res.data.name;
    });
  };

  ContentTabsSelector = (tab) => {
    switch (tab) {
      case "posts":
        return (
          <Jumbotron>
            {this.state.feed.map((eachPost) => {
              return (
                <React.Fragment key={eachPost.id}>
                  <Card className="mt-3" border="primary">
                    <Card.Header>{eachPost.text}</Card.Header>
                    <Card.Body>
                      <Card.Text style={{ textAlign: "center" }}>
                        <ImageHelper post={eachPost} />
                      </Card.Text>

                      {/* Comment */}
                    </Card.Body>
                  </Card>
                </React.Fragment>
              );
            })}
          </Jumbotron>
        );
      // break;
      case "following":
        return (
          <Jumbotron>
            {this.state.userData.following.map((eachId) => {
              return <h1>{eachId}</h1>;
            })}
          </Jumbotron>
        );
      // break;
      case "followers":
        return (
          <Jumbotron>
            {this.state.userData.followers.map((eachId) => {
              return <h1>{eachId}</h1>;
            })}
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
        console.log("userData", res.data);
        this.setState({
          userData: res.data,
          followingIds: res.data.following,
        });
      })
      .catch((errors) => {
        console.error(errors);
      });

    axios
      .get(`http://localhost:5000/post/by/${localStorage.getItem("userId")}`)
      .then((res) => {
        this.setState({ feed: res.data });
      })
      .catch((errors) => {
        console.error(errors);
      });
  }
  deleteUser = () => {
    alert("Are You Sure?");
    axios
      .delete(`http://localhost:5000/user/${localStorage.getItem("userId")}`)
      .then((res) => {
        localStorage.removeItem("userId");
        localStorage.removeItem("userLoggedIn");

        console.log(res.data);
        this.setState({ redirect: true });
      });
  };

  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <Container fluid>
          <Row>
            <Col
              lg={{ span: 6, offset: 3 }}
              md={{ span: 8, offset: 2 }}
              sm={{ span: 10, offset: 1 }}
              xs={{ span: 12, offset: 0 }}
            >
              <Card border="secondary">
                <Card.Header>Profile</Card.Header>
                <Card.Body>
                  {/* Upper Part */}
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
                      className="col col-lg-8 col-md-8 col-sm-8 col-xs-8"
                      style={{ margin: "auto" }} //margink : auto  to vertically center align rows
                    >
                      <Row>{this.state.userData.name}</Row>
                      <Row>{this.state.userData.email}</Row>
                    </Col>
                    <Col
                      className="px-lg-2 px-md-2 px-sm-2 px-0 col col-lg-1 col-md-1 col-sm-1 col-xs-1"
                      style={{ margin: "auto" }}
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
                      style={{ margin: "auto" }}
                    >
                      <svg
                        onClick={this.deleteUser}
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
                  {/* Posts Followrs part */}
                  <Card.Text>
                    <Nav
                      style={{ margin: "auto" }}
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
                            // this.getFollowingsData();
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
                  <Card.Text>
                    {this.ContentTabsSelector(this.state.tab)}
                  </Card.Text>
                  {/* <ControlledTabs /> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        {this.state.redirect && (window.open(`/`, "_self"), window.close())}
      </React.Fragment>
    );
  }
}

export default MyProfile;
