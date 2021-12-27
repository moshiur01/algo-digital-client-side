import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigate from "../Shared/Navigate/Navigate";
import "./Services.css";
import loadingImage from "../Home/img/loading.gif";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services);
  return (
    <>
      {services.length === 0 ? (
        <Container className="d-flex justify-content-center ">
          <img src={loadingImage} className="image-fluid" alt="" />
        </Container>
      ) : (
        <div>
          <Navigate></Navigate>
          <div className="service-banner">
            <h1>Services We Offer</h1>
            <p>Have a look at the list of services we offer to our clients. </p>
          </div>
          <h1 className="text-center my-4 py-3 fw-bold">
            ALGO DIGITAL Focused Services To Help You Grow
          </h1>
          <Container>
            {services.map((service) => (
              <Row
                key={service._id}
                className="gy-5 my-5"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <Col sm={12} md={6} lg={6} className="my-auto services-list">
                  <h1 className="mb-5">{service.name}</h1>
                  <p>{service.des}</p>
                  <Link to={`services/${service._id}`}>
                    <button className="top-service-button">
                      <span>Learn More </span>
                    </button>
                  </Link>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <img src={service.img} className="img-fluid" alt="" />
                </Col>
              </Row>
            ))}
          </Container>
        </div>
      )}
    </>
  );
};

export default Services;
