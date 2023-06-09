import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Team.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("https://digital-service-server-moshiur01.vercel.app/team")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);
  // console.log(team);
  return (
    <div
      className="mb-5 team-section "
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <Container className="container-fluid">
        <h1 className="text-center we-re-about-me">Meet Our Team</h1>
        <p className="text-center our-team-short-caption ">
          Behind a great job there is always a great team.
        </p>

        <Row className="text-center gy-4 ">
          {team.map((singleTeam) => (
            <Col sm={12} md={6} lg={3} key={singleTeam._id}>
              <div className="team-item">
                <figure className="team-profile">
                  <img
                    src={singleTeam.img}
                    className="img-fluid  w-75"
                    alt=""
                  />
                  <figcaption className="our-team">
                    <div className="details ">
                      <p className="content-white ">{singleTeam.nameDeg}</p>
                      <div className="social">
                        <a className="facebook" href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="twitter" href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a className="google-plus" href="#">
                          <i className="fab fa-google-plus-g"></i>
                        </a>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Team;
