import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import LoginImg from "../../images/login/login.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, signinUsignFacebook } = useAuth();
  return (
    <section className="login">
      <Container>
        <Row lg={2} sm={1} xs={1}>
          <Col>
            <h3>Justify Your Indentity with Login</h3>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              praesentium soluta cumque. Optio, explicabo consectetur.
            </p>
            <img className="img-fluid" src={LoginImg} alt="" />
          </Col>
          <Col>
            <h3 className="mb-3">Sign Up to Express Travel</h3>
            <Button
              onClick={signInUsingGoogle}
              className="me-2 mb-2"
              variant="success"
            >
              <FontAwesomeIcon className="me-2" icon={faUser} />
              Login With Google
            </Button>
            <Button
              onClick={signinUsignFacebook}
              className="me-2 mb-2"
              variant="success"
            >
              <FontAwesomeIcon icon={faUser} />
              Login With FaceBook
            </Button>
            <Form>
              <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
