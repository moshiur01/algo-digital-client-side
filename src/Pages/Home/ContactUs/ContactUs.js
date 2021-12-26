import React, { useEffect } from "react";
import "./ConatctUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="contact"
      className="contact-area section-big contact-me-div "
      data-aos="fade-up-left"
      data-aos-duration="2500"
    >
      <div className="container">
        <div className="row wow fadeIn">
          <div className="col-sm-5 col-md-3">
            <div className="contact-left-area">
              <div className="single-cl">
                <h3>Phone : </h3>
                <p>
                  <i className="fa fa-phone"></i> 01758 999 999
                </p>
                <p>
                  <i className="fa fa-phone"></i> 01758 888 777
                </p>
              </div>

              <div className="single-cl s-cl-2">
                <h3>Email : </h3>
                <p>
                  <i className="fa fa-envelope-o"></i> algo@support.com
                </p>
                <p>
                  <i className="fa fa-envelope-o"></i> algodigital@help.com
                </p>
              </div>

              <div className="single-cl single-cl3">
                <h3>Location : </h3>
                <p>
                  <i className="fa fa-home"></i> Kolabagan , Dhanmondi,
                  <br /> Dhaka-1205
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-7 col-md-9">
            <div className="contact-form">
              <div className="section-head">
                <h3 className="section-title">
                  Get In <span>Touch</span>
                </h3>
              </div>

              <div id="form-messages"></div>

              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group in_name">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Full Name"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group in_email">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group in_email">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group in_email">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Phone"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group in_message">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        placeholder="Your Message"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="">
                      <button className="top-service-button">
                        <span>Send Now </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
