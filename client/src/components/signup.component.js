import React from "react";
import { Button, Container, Form, Col, Row, InputGroup } from "react-bootstrap";

function SignUp() {
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
        <div
          class="alert alert-primary"
          role="alert"
          style={{
            // border: "1px solid black",
            borderRadius: "0px",
          }}
        >
          Register
        </div>
        <Col className="px-4">
          <Form.Row as={Row} controlId="formBasicText">
            <Form.Label column sm="0">
              First&nbsp;Name
            </Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Ex: Sundar"
                name="fname"
                //onChange={this.handleChange}
                required
              />
              {/* <InputGroup.Append>gg</InputGroup.Append> */}
            </InputGroup>
          </Form.Row>
          <Form.Row as={Row} controlId="formBasicText">
            <Form.Label column sm="0">
              Last&nbsp;Name
            </Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Ex: Pichai"
                name="lname"
                //onChange={this.handleChange}
                required
              />
              {/* <InputGroup.Append>{this.state.lnamePatternMsg}</InputGroup.Append> */}
            </InputGroup>
          </Form.Row>
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
              {/* <InputGroup.Append>
              {this.state.passwordPatternMsg}
            </InputGroup.Append> */}
            </InputGroup>

            {/* <Form.Row.Text id="inputGroupPrepend">@</Form.Row.Text> */}
          </Form.Row>
          <Button variant="primary" className="my-3" type="submit" block>
            Register &nbsp;&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-person-plus-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fill-rule="evenodd"
                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </Button>
        </Col>
      </Form>
    </Container>
  );
}

export default SignUp;
