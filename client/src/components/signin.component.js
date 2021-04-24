import React from "react";
import {
  Button,
  Alert,
  Container,
  Form,
  Col,
  Row,
  InputGroup,
} from "react-bootstrap";

function SignIn() {
  return (
    <Container
      className="col col-lg-5 col-md-7 col-sm-8 col-xs-12 my-5"
      // style={{ width: "35rem", border: "1px solid black" }}
    >
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
          <Form.Row as={Row} controlId="formBasicText">
            <Form.Label column sm="0">
              Email
            </Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Ex: sundarp12@gmail.com"
                name="email"
                //onChange={this.handleChange}
                required
              />
              {/* <InputGroup.Append>{this.state.emailPatternMsg}</InputGroup.Append> */}
            </InputGroup>
          </Form.Row>
          <Form.Row as={Row} controlId="formBasicPassword">
            <Form.Label column sm="0">
              Password
            </Form.Label>
            <InputGroup>
              <Form.Control
                type="password"
                placeholder="************"
                name="password"
                //onChange={this.handleChange}
                required
              />
            </InputGroup>
          </Form.Row>
          <Button variant="primary" className="my-3" type="submit" block>
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
  );
}

export default SignIn;
