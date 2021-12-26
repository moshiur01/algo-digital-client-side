import React from "react";
import Navigate from "../Shared/Navigate/Navigate";
import AboutUs from "./AboutUs/AboutUs";
import Team from "./AboutUs/Team/Team";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import Reviews from "./Reviews/Reviews";
import TopServices from "./TopServices/TopServices";

const Home = () => {
  return (
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
      <Reviews></Reviews>

      <div id="contactUs">
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
