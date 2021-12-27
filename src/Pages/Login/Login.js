import React, { useState } from "react";
import { Alert, Container, Form } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import Navigate from "../Shared/Navigate/Navigate";
import "./Login.css";
import useAuth from "../hooks/useAuth";

import loadingImage from "../Home/img/loading.gif";

const Login = () => {
  const { signInWithGoogle, loginUser, isLoading, authError } = useAuth();
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password, location, history);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div>
      <Navigate></Navigate>
      <div className="login-div">
        <h1 className="text-center login-heading">Please Login</h1>
        <Container className="login-form-container container-fluid">
          <Form onSubmit={handleLoginSubmit}>
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
                placeholder="Password"
                name="password"
                onBlur={handleOnBlur}
                required
              />
            </Form.Group>
            {isLoading && (
              <img src={loadingImage} className="image-fluid" alt="" />
            )}

            <button className="signUp-button">
              <span>Login</span>
            </button>

            <button className="signUp-button" onClick={handleGoogleSignIn}>
              <span>Google </span>
            </button>
            {authError && <Alert variant="danger">{authError}</Alert>}
            <p>
              New User? Please
              <span>
                <Link to="/signUp"> Sign Up</Link>
              </span>
            </p>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Login;
