import React from "react";
import "./popular.css";
import { AiOutlineArrowRight } from "react-icons/ai";

function Popular() {
  return (
    <div>
      <section id="top_deals" class="top_deals ">
        <div class="container">
          <div class="row">
            <div class="col-md-12 aos-init aos-animate" data-aos="fade-up">
              <div class="section-title text-center">
                <span>Popular Destinations</span>
                <h2>
                  Travel Most Popular Place <br /> In The World
                </h2>
              </div>
            </div>
          </div>

          <div class="row aos-init aos-animate" data-aos="fade-up">
            <div class="col-sm-4 col-xs-12">
              <div class="single-deal">
                <figure class="effect-sadie ">
                  <img
                    src="http://themesvila.com/html-templates/turista/assets/img/portfolio/2.jpg"
                    alt=""
                  />
                  <figcaption>
                    <div class="pull-left">
                      <h4>Beijing , China</h4>
                      <p>From $850</p>
                    </div>

                    <div class="pull-right">
                      <a href="tour-details.html">
                        <AiOutlineArrowRight
                          style={{ marginBottom: "2px", fontSize: "20px" }}
                        />
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div class="col-sm-4 col-xs-12">
              <div class="single-deal">
                <figure class="effect-sadie">
                  <img
                    src="http://themesvila.com/html-templates/turista/assets/img/portfolio/3.jpg"
                    alt=""
                  />
                  <figcaption>
                    <div class="pull-left">
                      <h4>Tokyo , Japan</h4>
                      <p>From $955</p>
                    </div>

                    <div class="pull-right">
                      <a href="tour-details.html">
                        <AiOutlineArrowRight
                          style={{ marginBottom: "2px", fontSize: "20px" }}
                        />
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div class="col-sm-4 col-xs-12">
              <div class="single-deal">
                <figure class="effect-sadie">
                  <img
                    src="http://themesvila.com/html-templates/turista/assets/img/portfolio/4.jpg"
                    alt=""
                  />
                  <figcaption>
                    <div class="pull-left">
                      <h4>Semporna , Malaysia</h4>
                      <p>From $650</p>
                    </div>

                    <div class="pull-right">
                      <a href="tour-details.html">
                        <AiOutlineArrowRight
                          style={{ marginBottom: "2px", fontSize: "20px" }}
                        />
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div class="col-sm-4 col-xs-12">
              <div class="single-deal">
                <figure class="effect-sadie">
                  <img
                    src="http://themesvila.com/html-templates/turista/assets/img/portfolio/5.jpg"
                    alt=""
                  />
                  <figcaption>
                    <div class="pull-left">
                      <h4>Victoria, Columbia</h4>
                      <p>From $450</p>
                    </div>

                    <div class="pull-right">
                      <a href="tour-details.html">
                        <AiOutlineArrowRight
                          style={{ marginBottom: "2px", fontSize: "20px" }}
                        />
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div class="col-sm-4 col-xs-12">
              <div class="single-deal">
                <figure class="effect-sadie">
                  <img
                    src="http://themesvila.com/html-templates/turista/assets/img/portfolio/6.jpg"
                    alt=""
                  />
                  <figcaption>
                    <div class="pull-left">
                      <h4>Bangkok , Thailan</h4>
                      <p>From $980</p>
                    </div>

                    <div class="pull-right">
                      <a href="tour-details.html">
                        <AiOutlineArrowRight
                          style={{ marginBottom: "2px", fontSize: "20px" }}
                        />
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div class="col-sm-4 col-xs-12">
              <div class="single-deal">
                <figure class="effect-sadie">
                  <img
                    src="http://themesvila.com/html-templates/turista/assets/img/portfolio/1.jpg"
                    alt=""
                  />
                  <figcaption>
                    <div class="pull-left">
                      <h4>Jakarta, Indonesia</h4>
                      <p>From $300</p>
                    </div>

                    <div class="pull-right">
                      <a href="tour-details.html">
                        <AiOutlineArrowRight
                          style={{ marginBottom: "2px", fontSize: "20px" }}
                        />
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Popular;
