import React, { Component } from "react";
import axios from "axios";
// import { Redirect } from "react-router-dom";
import {
  Button,
  Alert,
  Container,
  Form,
  Col,
  Row,
  InputGroup,
} from "react-bootstrap";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    redirect: "",
  };

  componentDidMount() {
    console.log("Clear the localStorage");
    localStorage.removeItem("newUser");
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    // console.log(this.state);
  };
  submit = (event) => {
    event.preventDefault();
    const payLoad = {
      email: this.state.email,
      password: this.state.password,
    };
    axios({
      url: "http://localhost:5000/auth/login",
      method: "POST",
      data: payLoad,
    })
      .then((res) => {
        console.log("Redirecting to Homepage");
        localStorage.setItem("userLoggedIn", "1");
        localStorage.setItem("userId", res.data.id);
        this.setState({
          redirect: true,
        });
      })
      .catch((res) => {
        console.log("Something Went Wrong!");
        this.setState({
          alertType: "danger",
          message: "Incorrect Email or Password",
        });
      });
  };
  render() {
    var showAlert;
    if (localStorage.getItem("newUser") === "1") {
      console.log("Show New User Alert");
      showAlert = true;
    }
    return (
      <React.Fragment>
        <Container
          className="col col-lg-5 col-md-7 col-sm-8 col-xs-12 my-5"
          // style={{ width: "35rem", border: "1px solid black" }}
        >
          {showAlert && (
            <Alert variant="primary">New Account Created! Login </Alert>
          )}
          {this.state.alertType && (
            <Alert
              variant="danger"
              onClick={() => {
                this.setState({ alertType: false });
              }}
            >
              Something went Wrong!!! ,Try Again!
            </Alert>
          )}
          <Form
            className="shadow-lg bg-white rounded"
            //onSubmit={this.submit}
            style={{
              alignContent: "center",
              border: "1px solid black",
              borderRadius: "0px",
            }}
          >
            <Alert
              className="alert alert-primary"
              role="alert"
              style={{
                borderRadius: "0px",
              }}
            >
              Login
            </Alert>
            <Col className="px-4">
              <Form.Row as={Row} controlid="formBasicText">
                <Form.Label column sm="0">
                  Email
                </Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Ex: sundarp12@gmail.com"
                    name="email"
                    onChange={this.handleChange}
                    required
                  />
                  {/* <InputGroup.Append>{this.state.emailPatternMsg}</InputGroup.Append> */}
                </InputGroup>
              </Form.Row>
              <Form.Row as={Row} controlid="formBasicPassword">
                <Form.Label column sm="0">
                  Password
                </Form.Label>
                <InputGroup>
                  <Form.Control
                    type="password"
                    placeholder="************"
                    name="password"
                    onChange={this.handleChange}
                    required
                  />
                </InputGroup>
              </Form.Row>
              <Button
                onClick={this.submit}
                variant="primary"
                className="my-3"
                type="submit"
                block
              >
                Login &nbsp;&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-key-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </Button>
            </Col>
          </Form>
        </Container>
        {this.state.redirect && (window.open(`/`, "_self"), window.close())}
      </React.Fragment>
    );
  }
}

export default SignIn;
