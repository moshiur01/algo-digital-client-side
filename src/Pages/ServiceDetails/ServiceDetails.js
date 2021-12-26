import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import "./ServiceDetails.css";
import Navigate from "..//Shared/Navigate/Navigate";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const ServiceDetails = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { user } = useAuth();

  // hook form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/orders", data).then((res) => {
      if (res.data.insertedId) {
        alert("Thank You for Choosing ALGO DIGITAL");
        reset();
      }
    });
    console.log(data);
  };

  let { id } = useParams();

  const [service, setService] = useState([]);
  const [serviceDetails, setServiceDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setServiceDetails(data.des1);
      });
  }, [id]);

  return (
    <div>
      <Navigate></Navigate>
      <div className="service-banner">
        <Container>
          <h1>{service?.bannerh}</h1>
          <p>{service?.bannerP}</p>
        </Container>
      </div>

      <Container>
        {serviceDetails.map((singleService) => (
          <>
            <Row
              key={service?._id}
              className="gy-5 my-5"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <Col sm={12} md={6} lg={6} className="my-auto services-list">
                <h1 className="mb-5">{singleService?.h1}</h1>
                <p>{singleService?.p1}</p>
                <br />
                <p>{singleService?.p2}</p>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <img src={singleService?.img1} className="img-fluid" alt="" />
              </Col>
            </Row>
          </>
        ))}
        <Container className="my-5  services-list">
          <h1 className="text-center">
            Get ALGO DIGITAL as your marketing partner to grow online.
          </h1>

          <div className="place-order-form-div">
            <Container>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control m-2"
                        id="name"
                        placeholder="Name"
                        value={user.displayName}
                        required="required"
                        {...register("name")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group in_email">
                      <input
                        type="email"
                        name="email"
                        className="form-control  m-2"
                        id="email"
                        placeholder="Email Address"
                        required="required"
                        value={user.email}
                        {...register("email")}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group in_email">
                      <input
                        type="text"
                        name="phone"
                        className="form-control  m-2"
                        id="phone"
                        placeholder="Phone"
                        required="required"
                        {...register("phoneNumber")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group in_email">
                      <input
                        type="text"
                        name="serviceName"
                        className="form-control  m-2"
                        value={service?.name}
                        placeholder="Service Name"
                        required="required"
                        {...register("serviceName")}
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group in_message">
                      <textarea
                        name="address"
                        className="form-control ms-2 ser-details-text"
                        id="address"
                        placeholder="Your Address"
                        required="required"
                        {...register("address")}
                      ></textarea>
                    </div>
                    <div className="text-center my-2">
                      <button
                        input
                        type="submit"
                        className="top-service-button"
                      >
                        <span>Book Now </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </Container>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default ServiceDetails;
