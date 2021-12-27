import React from "react";
import Navigate from "../Shared/Navigate/Navigate";
import img from "./img/not-found.png";

const NotFound = () => {
  return (
    <div>
      <Navigate></Navigate>
      <img src={img} className="img-fluid" alt="" />
    </div>
  );
};

export default NotFound;
