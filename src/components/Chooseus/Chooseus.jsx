import React from "react";
import "./choose.css";
import { BiSolidWallet } from "react-icons/bi";
import {
  BsGlobeAsiaAustralia,
  BsPersonFill,
  BsFillUnlockFill,
} from "react-icons/bs";

function Chooseus() {
  return (
    <div>
      <section className="why_choose">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos-init aos-animate" data-aos="fade-up">
              <div className="section-title text-center">
                <span>Why Choose Us?</span>
                <h2>
                  Every Time We Provide <br /> best Service
                </h2>
              </div>
            </div>
          </div>

          <div className="row text-left align-items-center">
            <div className="col-md-6">
              <div className="why-choose-img">
                <img
                  src="	http://themesvila.com/html-templates/turista/assets/img/why-choose-us/why-choose-us.png"
                  alt="Big image"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="single-choose mb-20">
                    <i className="icofont-package">
                      {" "}
                      <BiSolidWallet
                        style={{ marginBottom: "6px", fontSize: "30px" }}
                      />
                    </i>
                    <h4>Exclusive Packages</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                  </div>
                </div>

                <div className="col-sm-6 col-xs-12">
                  <div className="single-choose mb-20">
                    <i className="icofont-world">
                      <BsGlobeAsiaAustralia
                        style={{ marginBottom: "6px", fontSize: "30px" }}
                      />
                    </i>
                    <h4>World Class Service</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                  </div>
                </div>

                <div className="col-sm-6 col-xs-12">
                  <div className="single-choose">
                    <i className="icofont-man-in-glasses">
                      <BsPersonFill
                        style={{ marginBottom: "6px", fontSize: "30px" }}
                      />
                    </i>
                    <h4>Best Travel Guide</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                  </div>
                </div>

                <div className="col-sm-6 col-xs-12">
                  <div className="single-choose">
                    <i className="icofont-lock">
                      <BsFillUnlockFill
                        style={{ marginBottom: "6px", fontSize: "30px" }}
                      />
                    </i>
                    <h4>100% Secure</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Chooseus;
