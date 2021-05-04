import React, { useRef, useState } from "react";
import { Card, Form, Button, Container, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { signIn } from "../../actions";

const SignIn = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, loginAsGuest } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      const user = await login(
        emailRef.current.value,
        passwordRef.current.value
      );
      history.push("/");
      dispatch(signIn());
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  const guestSignIn = async () => {
    await loginAsGuest();
    history.push("/");
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    requierd="true"></Form.Control>
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    requierd="true"></Form.Control>
                </Form.Group>
                <div className="w-100 text-center mt-3">
                  <Link style={{ color: "grey" }} to="/forgot-password">
                    Forgot Password?
                  </Link>
                </div>
                <Button
                  className="w-100 mt-3"
                  type="submit"
                  variant="danger"
                  disabled={loading}>
                  Log In
                </Button>
                <Button
                  className="w-100 mt-3 mb-2"
                  onClick={guestSignIn}
                  variant="primary"
                  disabled={loading}>
                  Continue as a guest
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Don't have an account?{" "}
            <Link style={{ color: "blue" }} to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignIn;
