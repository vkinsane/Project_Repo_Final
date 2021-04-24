import React, {
  useState,
  // useEffect
} from "react";

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

function ContentTabsSelector({ tab }) {
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
          <h1>Hello, following!</h1>
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
}

// function ControlledTabs() {
//   const [key, setKey] = useState("home");

//   return (
//     <Tabs
//       id="controlled-tab-example"
//       activeKey={key}
//       onSelect={(k) => setKey(k)}
//     >
//       <Tab eventKey="home" title="Home">
//         O! call not me to justify the wrong That thy unkindness lays upon my
//         heart; Wound me not with thine eye, but with thy tongue: Use power with
//         power, and slay me not by art, Tell me thou lov'st elsewhere; but in my
//         sight, Dear heart, forbear to glance thine eye aside: What need'st thou
//         wound with cunning, when thy might Is more than my o'erpress'd defence
//         can bide? Let me excuse thee: ah! my love well knows Her pretty looks
//         have been mine enemies;
//       </Tab>
//       <Tab eventKey="profile" title="Profile">
//         When I do count the clock that tells the time, And see the brave day
//         sunk in hideous night; When I behold the violet past prime, And sable
//         curls, all silvered o'er with white; When lofty trees I see barren of
//         leaves, Which erst from heat did canopy the herd, And summer's green all
//         girded up in sheaves, Borne on the bier with white and bristly beard,
//         Then of thy beauty do I question make, That thou among the wastes of
//         time must go,
//       </Tab>
//       {/* <Tab eventKey="contact" title="Contact" disabled>
//         <Sonnet />
//       </Tab> */}
//     </Tabs>
//   );
// }

function MyProfile() {
  const [tab, setTab] = useState("posts");
  console.log(tab);
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
                    className="px-lg-2 px-md-2 px-sm-0 px-0"
                    lg={{ span: 2, offset: 0 }}
                    md={{ span: 2, offset: 0 }}
                    sm={{ span: 2, offset: 0 }}
                    xs={{ span: 2, offset: 0 }}
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
                    lg={{ span: 8, offset: 0 }}
                    md={{ span: 8, offset: 0 }}
                    sm={{ span: 8, offset: 0 }}
                    xs={{ span: 8, offset: 0 }}
                    style={{ border: "1px solid black", margin: "auto" }} //margink : auto  to vertically center align rows
                  >
                    <Row style={{ border: "1px solid black" }}>Username</Row>
                    <Row style={{ border: "1px solid black" }}>
                      user@email.com
                    </Row>
                  </Col>
                  <Col
                    className="px-lg-2 px-md-2 px-sm-2 px-0"
                    lg={{ span: 1, offset: 0 }}
                    md={{ span: 1, offset: 0 }}
                    sm={{ span: 1, offset: 0 }}
                    xs={{ span: 1, offset: 0 }}
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
                    className="px-lg-2 px-md-2 px-sm-2 px-0"
                    lg={{ span: 1, offset: 0 }}
                    md={{ span: 1, offset: 0 }}
                    sm={{ span: 1, offset: 0 }}
                    xs={{ span: 1, offset: 0 }}
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
                <hr></hr>
                {/* horizontal line */}
                {/* <Card.Text
                  style={{
                    borderTop: "1px solid black",
                    borderTopColor: "#d5d5d5",
                  }}
                ></Card.Text> */}
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                          setTab("posts");
                        }}
                      >
                        POSTS
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="following"
                        onClick={() => {
                          setTab("following");
                        }}
                      >
                        FOLLOWING
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="followers"
                        onClick={() => {
                          setTab("followers");
                        }}
                      >
                        FOLLOWERS
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Text>
                <Card.Text style={{ border: "1px solid black" }}>
                  <ContentTabsSelector tab={tab} />
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

export default MyProfile;
