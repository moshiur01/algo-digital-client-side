import React from "react";
import { Container } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import loadingImage from "../../Home/img/loading.gif";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  let location = useLocation();
  if (user.email && admin) {
    return children;
  }

  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center ">
        <img src={loadingImage} className="image-fluid" alt="" />
      </Container>
    );
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
