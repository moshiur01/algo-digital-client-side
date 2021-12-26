import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import "./TopServices.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AOS from "aos";
import "aos/dist/aos.css";

const TopServices = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" top-service-div">
      <Container>
        <Row>
          <Col
            xm={12}
            sm={12}
            md={6}
            lg={6}
            className=" d-flex align-items-center"
            data-aos="fade-up"
          >
            <div className=" top-service-left-heading">
              <h1>
                5 Years of <br /> Experience in Financial & Business Services
              </h1>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment
              </p>
              <Link to="/services">
                <button className="top-service-button">
                  <span>More Services </span>
                </button>
              </Link>
            </div>
          </Col>
          <Col xm={12} sm={12} md={6} lg={6} className="" data-aos="fade-down">
            <Container>
              <h1 className="top-services-heading text-center">
                Our Top Services
              </h1>
              <Row className="">
                <Col xm={12} sm={12} md={6} lg={6}>
                  <Link to="/services/seo" className="link-text-dec">
                    <div className="common shadow">
                      <div className="icon">
                        <FontAwesomeIcon icon={faSearch} />
                      </div>
                      <div className="text ">
                        <h4>Search Engine Optimization</h4>

                        <p>
                          We help you rank at the top of search engines to get
                          more visibility every time someone searches for your
                          business related topics.
                        </p>
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col xm={12} sm={12} md={6} lg={6}>
                  <Link to="/services/seo" className="link-text-dec">
                    <div className="common shadow">
                      <div className="icon">
                        <FontAwesomeIcon icon={faGlobe} />
                      </div>
                      <div className="text ">
                        <h4>Web Design</h4>

                        <p>
                          Custom website and eCommerce solutions that deliver.
                          Beautiful websites to fit your needs, now and into the
                          future.
                        </p>
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col xm={12} sm={12} md={6} lg={6}>
                  <Link to="/services/seo" className="link-text-dec">
                    <div className="common shadow">
                      <div className="icon">
                        <i className="fab fa-adversal"></i>
                      </div>
                      <div className="text ">
                        <h4>Google Ads</h4>

                        <p>
                          Advertising on Google is one of the quickest ways to
                          get traffic to your website and increase the number of
                          phone calls and leads.
                        </p>
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col xm={12} sm={12} md={6} lg={6}>
                  <Link to="/services/seo" className="link-text-dec">
                    <div className="common shadow">
                      <div className="icon">
                        <i className="fas fa-users"></i>
                      </div>
                      <div className="text ">
                        <h4>Social Media Management</h4>

                        <p>
                          We create the content, we optimise the content, we run
                          ads to make sure your audience sees your content.
                        </p>
                      </div>
                    </div>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopServices;
