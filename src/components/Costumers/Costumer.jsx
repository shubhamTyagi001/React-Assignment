import React from "react";
import "./costumer.css";
import Slider from "react-slick";

function Costumer() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <section
        class="testimonial"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="overlay section-padding">
          <div class="container">
            <div class="row">
              <div class="col-md-12 aos-init aos-animate" data-aos="fade-up">
                <div class="section-title text-center white-title">
                  <span>Testimonials</span>
                  <h2>
                    What our Happy Customers <br />
                    Say About Us
                  </h2>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 d-block mx-auto text-center d-flex justify-content-center align-items-center">
                <div
                  style={{
                    width: "65%",
                    backgroundColor: "#f05942",
                    borderRadius: "4px",
                  }}
                >
                  <Slider {...settings}>
                    <div class="single-testimonial">
                      <div class="testimonial-content">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Praesent bibendum dolor eros imperdiet amet hendrerit
                      </div>

                      <div class="testimonial-bottom">
                        <img
                          src="http://themesvila.com/html-templates/turista/assets/img/review/3.png"
                          width="50"
                          alt="review image"
                        />
                        <h3 class="title">Williamson</h3>
                        <div class="test-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="single-testimonial">
                      <div class="testimonial-content">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Praesent bibendum dolor eros imperdiet amet hendrerit@
                      </div>

                      <div class="testimonial-bottom">
                        <img
                          src="http://themesvila.com/html-templates/turista/assets/img/review/3.png"
                          width="50"
                          alt="review image"
                        />
                        <h3 class="title">Williamson</h3>
                        <div class="test-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="single-testimonial">
                      <div class="testimonial-content">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Praesent bibendum dolor eros imperdiet amet hendrerit
                      </div>

                      <div class="testimonial-bottom">
                        <img
                          src="http://themesvila.com/html-templates/turista/assets/img/review/3.png"
                          width="50"
                          alt="review image"
                        />
                        <h3 class="title">Williamson</h3>
                        <div class="test-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="single-testimonial">
                      <div class="testimonial-content">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Praesent bibendum dolor eros imperdiet amet hendrerit
                      </div>

                      <div class="testimonial-bottom">
                        <img
                          src="http://themesvila.com/html-templates/turista/assets/img/review/3.png"
                          width="50"
                          alt="review image"
                        />
                        <h3 class="title">Williamson</h3>
                        <div class="test-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="single-testimonial">
                      <div class="testimonial-content">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Praesent bibendum dolor eros imperdiet amet hendrerit
                      </div>

                      <div class="testimonial-bottom">
                        <img
                          src="	http://themesvila.com/html-templates/turista/assets/img/review/1.png"
                          width="50"
                          alt="review image"
                        />
                        <h3 class="title">Williamson</h3>
                        <div class="test-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="single-testimonial">
                      <div class="testimonial-content">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Praesent bibendum dolor eros imperdiet amet hendrerit
                      </div>

                      <div class="testimonial-bottom">
                        <img
                          src="http://themesvila.com/html-templates/turista/assets/img/review/2.png"
                          width="50"
                          alt="review image"
                        />
                        <h3 class="title">Williamson</h3>
                        <div class="test-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Costumer;
