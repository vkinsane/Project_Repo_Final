import React, { Component } from "react";
// import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
// import { Link, withRouter } from "react-router-dom";

class Menu extends Component {
  state = {
    redirect: "",
  };
  render() {
    var userLoggedIn = false;
    if (localStorage.getItem("userLoggedIn") === "1") {
      userLoggedIn = true;
    }
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Project MERN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {userLoggedIn && <Nav.Link href="/my-profile">My profile</Nav.Link>}
            {!userLoggedIn && <Nav.Link href="/sign-up">Sign Up</Nav.Link>}
            {!userLoggedIn && <Nav.Link href="/sign-in">Sign In</Nav.Link>}
          </Nav>
          <Nav>
            <Form inline>
              {userLoggedIn && (
                <Button
                  onClick={() => {
                    this.setState({ redirect: true });
                    localStorage.removeItem("userLoggedIn");
                  }}
                  variant="outline-danger"
                >
                  Logout
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-door-open-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                  </svg>
                </Button>
              )}
              {this.state.redirect &&
                (window.open(`/`, "_self"), window.close())}
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Menu;
