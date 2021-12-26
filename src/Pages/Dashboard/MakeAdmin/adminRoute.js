import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center ">
        <Spinner animation="grow" />
      </Container>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
