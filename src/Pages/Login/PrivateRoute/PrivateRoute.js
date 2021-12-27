import React from "react";
import useAuth from "../../hooks/useAuth";
import { Container } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
import loadingImage from "../../Home/img/loading.gif";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center ">
        <img src={loadingImage} className="image-fluid" alt="" />
      </Container>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
