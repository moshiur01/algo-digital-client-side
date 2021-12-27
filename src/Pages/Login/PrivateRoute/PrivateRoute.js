import React from "react";
import useAuth from "../../hooks/useAuth";
import { Container } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import loadingImage from "../../Home/img/loading.gif";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center ">
        <img src={loadingImage} className="image-fluid" alt="" />
      </Container>
    );
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
