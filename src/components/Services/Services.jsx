import React, { useEffect } from "react";
import "./service.css";
import { TbBrandBooking } from "react-icons/tb";
import { PiAirplaneInFlightFill } from "react-icons/pi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { BsTicketFill } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    Aos.init({ duration: "2000" });
    Aos.refresh();
  }, []);

  return (
    <div>
      <section id="service" className="our_services">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-sm-6 col-xs-12 " data-aos="fade-up">
              <div className="service">
                <div className="icon">
                  <i className="icofont-bed">
                    {" "}
                    <TbBrandBooking
                      style={{ marginBottom: "6px", fontSize: "50px" }}
                    />
                  </i>
                </div>
                <h4>Hotel Booking</h4>
                <p>
                  Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                  diam nonumy eirmod tempor invidunt
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12" data-aos="fade-up">
              <div className="service">
                <div className="icon">
                  <i className="icofont-airplane-alt">
                    <PiAirplaneInFlightFill
                      style={{ marginBottom: "6px", fontSize: "50px" }}
                    />
                  </i>
                </div>
                <h4>Flight Booking</h4>
                <p>
                  Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                  diam nonumy eirmod tempor invidunt
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12" data-aos="fade-up">
              <div className="service">
                <div className="icon">
                  <i className="icofont-air-ticket">
                    <BsTicketFill
                      style={{ marginBottom: "6px", fontSize: "50px" }}
                    />
                  </i>
                </div>
                <h4>Ticket Booking</h4>
                <p>
                  Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                  diam nonumy eirmod tempor invidunt
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12" data-aos="fade-up">
              <div className="service">
                <div className="icon">
                  <i className="icofont-travelling">
                    {" "}
                    <MdOutlineTravelExplore
                      style={{ marginBottom: "6px", fontSize: "50px" }}
                    />
                  </i>
                </div>
                <h4>Amazing tour</h4>
                <p>
                  Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                  diam nonumy eirmod tempor invidunt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
