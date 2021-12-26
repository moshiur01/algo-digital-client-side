import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutUs.css";
import about from "./img/about-2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="about-me-container-div">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6} data-aos="fade-right">
            <img src={about} alt="" className="img-fluid" />
          </Col>
          <Col sm={12} md={6} lg={6} data-aos="fade-left">
            <p className="about-company">
              <span className="ms-2">ABOUT COMPANY</span>
            </p>
            <h1 className="we-re-about-me my-4">
              WE'RE LEADING DIGITAL BUSINESS AGENCY
            </h1>

            <p className="about-me-p">
              An enthusiastic team delivering beautiful results. We’re a
              close-knit bunch of talented individuals with a strong passion for
              our specialties and a dedication to delivering exceptional
              results.
            </p>
            <Row>
              <Col sm={12} xm={12} md={6} lg={6} className="about-me-num">
                <span className="">01. Strategy</span>
                <br />
                <p className="about-me-p">
                  Building creative solutions to complex problems–from
                  increasing sales to conversion–we create a strategy.
                </p>
              </Col>
              <Col sm={12} xm={12} md={6} lg={6} className="about-me-num">
                <span className="">02. Design</span>
                <br />
                <p className="about-me-p">
                  Taking a user-centric approach to architecting the entire
                  journey and designing an engaging experience for your brand.
                </p>
              </Col>
              <Col sm={12} xm={12} md={6} lg={6} className="about-me-num">
                <span className="">03. Engineering</span>
                <br />
                <p className="about-me-p">
                  Developing custom enterprise platforms, ecommerce solutions
                  and architecting integrations for a customer friendly CMS and
                  seamless user experience.
                </p>
              </Col>
              <Col sm={12} xm={12} md={6} lg={6} className="about-me-num">
                <span className="">04. Marketing</span>
                <br />
                <p className="about-me-p">
                  Leveraging an omni-channel strategy to drive engagement,
                  traffic and ultimately conversion. We work as an extension of
                  your business.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
