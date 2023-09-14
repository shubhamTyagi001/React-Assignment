import React from "react";
import "./contact.css";
import { CiLocationOn } from "react-icons/ci";
import { BsHeadset } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";

function Contuctus() {
  return (
    <div>
      <section id="contact" className="contact_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos-init aos-animate" data-aos="fade-up">
              <div className="section-title text-center">
                <span>Contact Us</span>
                <h2>
                  If You Have any Question <br /> Drop a Message
                </h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-7 col-sm-12 col-xs-12 d-block mx-auto aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="contact">
                <form
                  id="contact-form"
                  method="post"
                  enctype="multipart/form-data"
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="first-name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="first-email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        rows="6"
                        name="message"
                        className="form-control"
                        id="description"
                        placeholder="Your Message"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="col-md-12">
                      <div className="actions text-left">
                        <input
                          type="submit"
                          value="Send message"
                          name="submit"
                          id="submitButton"
                          className="btn btn-lg btn-contact-bg"
                          title="Submit Your Message!"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-5 col-sm-12 col-xs-12 d-block mx-auto">
              <div className="contact_address text-left">
                <div className="single-contact-info">
                  <i className="icofont-headphone-alt">
                    <CiLocationOn
                      style={{
                        marginBottom: "2px",
                        fontSize: "20px",
                        fill: "white",
                      }}
                    />
                  </i>

                  <p>
                    2369 Robinson Lane Jackson
                    <br /> OH 45640
                  </p>
                </div>

                <div className="single-contact-info">
                  <i className="icofont-headphone-alt">
                    {" "}
                    <BsHeadset
                      style={{
                        marginBottom: "2px",
                        fontSize: "20px",
                        fill: "white",
                      }}
                    />
                  </i>
                  <p>
                    (+1) 740-395-3829
                    <br />
                    (+1) 740-982-9821
                  </p>
                </div>

                <div className="single-contact-info">
                  <i className="icofont-ui-email">
                    {" "}
                    <MdAttachEmail
                      style={{
                        marginBottom: "2px",
                        fontSize: "20px",
                        fill: "white",
                      }}
                    />
                  </i>
                  <p>
                    help@turista.com
                    <br />
                    info@turista.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contuctus;
