import React, { useState } from "react";
import { Alert, Container, Form, Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../hooks/useAuth";
import Navigate from "../Shared/Navigate/Navigate";
import "./SignUp.css";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({});
  const { user, registerUser, authError, isLoading, signInWithGoogle } =
    useAuth();

  const history = useHistory();
  const location = useLocation();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newSignUpData = { ...signUpData };
    newSignUpData[field] = value;
    setSignUpData(newSignUpData);
  };

  const handleSignUpSubmit = (e) => {
    if (signUpData.password !== signUpData.retypePassword) {
      alert("password didn't match");
      return;
    }

    registerUser(
      signUpData.email,
      signUpData.password,
      signUpData.name,
      history
    );
    e.preventDefault();
  };
  //   google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div>
      <Navigate></Navigate>

      <div className="signUp-div">
        <h1 className="text-center signUp-heading">Please Signup</h1>
        <Container className="signUp-form-container">
          <Form onSubmit={handleSignUpSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Name"
                name="name"
                onBlur={handleOnBlur}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onBlur={handleOnBlur}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Password"
                name="password"
                onBlur={handleOnBlur}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Retype Your Password"
                name="retypePassword"
                onBlur={handleOnBlur}
                required
              />
            </Form.Group>
            <>
              {isLoading && <Spinner animation="grow" />}
              {user?.email && (
                <Alert variant="info rounded">User Created successfully</Alert>
              )}
            </>
            <>
              {authError && <Alert variant="danger rounded">{authError}</Alert>}
            </>

            <>
              <button class="signUp-button">
                <span>SignUp </span>
              </button>

              <button class="signUp-button" onClick={handleGoogleSignIn}>
                <span>Google </span>
              </button>
            </>

            <p>
              Already Registered? Please
              <span>
                <Link to="/login" className="fw-bold">
                  Login
                </Link>
              </span>
            </p>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default SignUp;
