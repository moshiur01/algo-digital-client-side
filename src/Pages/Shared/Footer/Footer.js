import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container className="text-white">
        <Row className="">
          <Col sm={12} md={4} lg={4} className="my-5">
            <h3>ALGO DIGITAL</h3>
            <br />
            <p>
              An enthusiastic team delivering beautiful results. We’re a
              close-knit bunch of talented individuals with a strong passion for
              our specialties and a dedication to delivering exceptional
              results.
            </p>
          </Col>
          <Col sm={12} md={4} lg={4} className="my-5">
            <h3>Speak to our friendly team today.</h3>
            <br />
            <p>
              We’re available for meetings at either of our two convenient
              office locations, over video, or we’re more than happy to come to
              you
            </p>
          </Col>
          <Col sm={12} md={4} lg={4} className="my-5">
            <h3>Visit us</h3>
            <br />
            <br />
            <i class="fas fa-home"></i> &nbsp; Kolabagan , Dhanmondi, Dhaka-1205
            <br />
            <i class="fas fa-phone-alt"></i> &nbsp; 01758 999 999
            <br />
            <i class="fas fa-envelope"></i> &nbsp; algo@support.com
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
