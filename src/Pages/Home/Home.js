import React, { useEffect, useState } from "react";
import Navigate from "../Shared/Navigate/Navigate";
import AboutUs from "./AboutUs/AboutUs";
import Team from "./AboutUs/Team/Team";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import Reviews from "./Reviews/Reviews";
import TopServices from "./TopServices/TopServices";
import loadingImage from "./img/loading.gif";
import { Container } from "react-bootstrap";

const Home = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/team")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  return (
    <>
      {team.length === 0 ? (
        <Container className="d-flex justify-content-center ">
          <img src={loadingImage} className="image-fluid" alt="" />
        </Container>
      ) : (
        <div>
          <Navigate></Navigate>
          <Banner></Banner>
          <TopServices></TopServices>
          <div id="aboutUs">
            <AboutUs></AboutUs>
          </div>
          <div id="team">
            <Team></Team>
          </div>
          <div id="reviews">
            <Reviews></Reviews>
          </div>

          <div id="contactUs">
            <ContactUs></ContactUs>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
