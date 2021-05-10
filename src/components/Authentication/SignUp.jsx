import React, { useRef, useState } from "react";
import { Card, Form, Button, Container, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { signIn } from "../../actions";
import { db } from "../../firebase";
import { toast } from "react-toastify";

const SignUp = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value.length < 6) {
      return setError("Please enter more then 6 characters");
    }

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      let response = await signup(
        emailRef.current.value,
        passwordRef.current.value
      );
      response.user
        .updateProfile({
          displayName: nameRef.current.value,
        })
        .catch(function (error) {
          toast.error("Woops! somthing went wrong");
        });

      db.collection("users").doc(response.user.uid).set({
        name: nameRef.current.value,
        email: emailRef.current.value,
        id: response.user.uid,
        address: "",
        receiver_name: "",
        receiver_lastname: "",
        phone: "",
        city: "",
        state: "",
        zip: "",
      });

      dispatch(signIn());

      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center mt-5"
        style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="text">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    ref={nameRef}
                    requierd="true"></Form.Control>
                </Form.Group>
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
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    requierd="true"></Form.Control>
                </Form.Group>
                <Button
                  className="w-100 mt-3"
                  type="submit"
                  variant="danger"
                  disabled={loading}>
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account?{" "}
            <Link style={{ color: "blue" }} to="/signin">
              Log In
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
