import React from "react";
import "./ourbest.css";
import Slider from "react-slick";
function Ourbest() {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <section id="special_package" className="special_package section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos-init aos-animate" data-aos="fade-up">
              <div className="section-title text-center">
                <span>Popular Tour Package</span>
                <h2>
                  The Best Of Our All <br /> Tour Packages
                </h2>
              </div>
            </div>
          </div>
          <div className="row text-left">
            <div className="prevent">
              <Slider {...settings}>
                <div className="single_package">
                  <div className="pack_image">
                    <img
                      className="img-fluid"
                      src="	http://themesvila.com/html-templates/turista/assets/img/package/1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="package-hover">
                    <div className="pull-left">
                      <h5>Australia</h5>
                    </div>
                    <div className="pull-right">
                      <span className="pack_price">$236</span>
                    </div>
                    <div className="clearfix"></div>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <span className="time_zone">
                      <i className="icofont-wall-clock"></i> 5 days - 4 night
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet adipiscing elit. In efficitur
                      diam tellus Phasellus
                    </p>
                    <a href="tour-details.html" className="btn-bg">
                      Book Now
                    </a>
                  </div>
                </div>

                <div className="single_package">
                  <div className="pack_image">
                    <img
                      className="img-fluid"
                      src="http://themesvila.com/html-templates/turista/assets/img/package/3.jpg"
                      alt=""
                    />
                  </div>

                  <div className="package-hover">
                    <div className="pull-left">
                      <h5>Canada</h5>
                    </div>
                    <div className="pull-right">
                      <span className="pack_price">$236</span>
                    </div>
                    <div className="clearfix"></div>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <span className="time_zone">
                      <i className="icofont-wall-clock"></i> 5 days - 4 night
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet adipiscing elit. In efficitur
                      diam tellus Phasellus
                    </p>
                    <a href="tour-details.html" className="btn-bg">
                      Book Now
                    </a>
                  </div>
                </div>

                <div className="single_package">
                  <div className="pack_image">
                    <img
                      className="img-fluid"
                      src="	http://themesvila.com/html-templates/turista/assets/img/package/2.jpg"
                      alt=""
                    />
                  </div>

                  <div className="package-hover">
                    <div className="pull-left">
                      <h5>France</h5>
                    </div>
                    <div className="pull-right">
                      <span className="pack_price">$236</span>
                    </div>
                    <div className="clearfix"></div>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <span className="time_zone">
                      <i className="icofont-wall-clock"></i> 5 days - 4 night
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet adipiscing elit. In efficitur
                      diam tellus Phasellus
                    </p>
                    <a href="tour-details.html" className="btn-bg">
                      Book Now
                    </a>
                  </div>
                </div>

                <div className="single_package">
                  <div className="pack_image">
                    <img
                      className="img-fluid"
                      src="https://images.pexels.com/photos/17366637/pexels-photo-17366637/free-photo-of-woman-on-hilltop-over-forest-under-clouds.jpeg"
                      alt=""
                    />
                  </div>

                  <div className="package-hover">
                    <div className="pull-left">
                      <h5>Germany</h5>
                    </div>
                    <div className="pull-right">
                      <span className="pack_price">$236</span>
                    </div>
                    <div className="clearfix"></div>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <span className="time_zone">
                      <i className="icofont-wall-clock"></i> 5 days - 4 night
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet adipiscing elit. In efficitur
                      diam tellus Phasellus
                    </p>
                    <a href="tour-details.html" className="btn-bg">
                      Book Now
                    </a>
                  </div>
                </div>

                <div className="single_package">
                  <div className="pack_image">
                    <img
                      className="img-fluid"
                      src="http://themesvila.com/html-templates/turista/assets/img/package/1.jpg"
                      alt=""
                    />
                  </div>

                  <div className="package-hover">
                    <div className="pull-left">
                      <h5>Japan</h5>
                    </div>
                    <div className="pull-right">
                      <span className="pack_price">$236</span>
                    </div>
                    <div className="clearfix"></div>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <span className="time_zone">
                      <i className="icofont-wall-clock"></i> 5 days - 4 night
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet adipiscing elit. In efficitur
                      diam tellus Phasellus
                    </p>
                    <a href="tour-details.html" className="btn-bg">
                      Book Now
                    </a>
                  </div>
                </div>

                <div className="single_package">
                  <div className="pack_image">
                    <img
                      className="img-fluid"
                      src="https://images.pexels.com/photos/17366637/pexels-photo-17366637/free-photo-of-woman-on-hilltop-over-forest-under-clouds.jpeg"
                      alt=""
                    />
                  </div>

                  <div className="package-hover">
                    <div className="pull-left">
                      <h5>Thailand</h5>
                    </div>
                    <div className="pull-right">
                      <span className="pack_price">$236</span>
                    </div>
                    <div className="clearfix"></div>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <span className="time_zone">
                      <i className="icofont-wall-clock"></i> 5 days - 4 night
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet adipiscing elit. In efficitur
                      diam tellus Phasellus
                    </p>
                    <a href="tour-details.html" className="btn-bg">
                      Book Now
                    </a>
                  </div>
                </div>

                <div className="single_package">
                  <div className="pack_image">
                    <img
                      className="img-fluid"
                      src="https://images.pexels.com/photos/17366637/pexels-photo-17366637/free-photo-of-woman-on-hilltop-over-forest-under-clouds.jpeg"
                      alt=""
                    />
                  </div>

                  <div className="package-hover">
                    <div className="pull-left">
                      <h5>China</h5>
                    </div>
                    <div className="pull-right">
                      <span className="pack_price">$236</span>
                    </div>
                    <div className="clearfix"></div>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <span className="time_zone">
                      <i className="icofont-wall-clock"></i> 5 days - 4 night
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet adipiscing elit. In efficitur
                      diam tellus Phasellus
                    </p>
                    <a href="tour-details.html" className="btn-bg">
                      Book Now
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ourbest;
