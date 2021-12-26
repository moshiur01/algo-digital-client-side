import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import bannerImg from "../Banner/img/banner-side-pic.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="my-auto banner-bg  ">
      <Container className=" container-fluid div-area">
        <Row>
          <Col
            sm={12}
            md={8}
            lg={8}
            className="my-auto center "
            data-aos="fade-right"
          >
            <p className="fw-bold fs-2">WELCOME TO ALGO DIGITAL</p>
            <h1 className="banner-h1">Best IT Solutions Provider Agency </h1>
            <p className="fw-bold fs-5">
              Transform your brand with a digital-first approach with ALGO
              DIGITAL
            </p>
            <Link to="/services">
              <button class="button">
                <span>Services </span>
              </button>
            </Link>
          </Col>
          <Col sm={12} md={4} lg={4} className="mx-auto " data-aos="fade-left">
            <img src={bannerImg} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
