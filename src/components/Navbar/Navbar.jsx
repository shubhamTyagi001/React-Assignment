import React, { useEffect, useState } from "react";
import "./nav.css";
import Slider from "react-slick";
import { CiMenuBurger } from "react-icons/ci";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navbar() {
  const [Navbar, setNavbar] = useState(false);
  const [Button, setButton] = useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showButton = () => {
    if (window.innerWidth <= 770) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    rtl: true,
  };

  return (
    <>
      <div
        id="navbar"
        className={
          Navbar
            ? "fixed-top navbar-light  site-navigation navbar-fixed"
            : "fixed-top navbar-light bg-faded  navbar-fixed"
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="site-logo">
                <a href="index.html">
                  <img
                    src="http://themesvila.com/html-templates/turista/assets/img/logo.png"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-10 col-md-9 col-sm-8">
              <div className="header_right">
                {Button ? (
                  <nav
                    id={Navbar ? "main-menue" : "main-menu"}
                    className="ml-auto pc"
                  >
                    <ul>
                      <li>
                        <a href="#home">Home</a>
                      </li>
                      <li>
                        <a href="#service">Service</a>
                      </li>
                      <li>
                        <a href="#top_deals">Top deals</a>
                      </li>
                      <li>
                        <a href="#special_package">
                          Package <i className="icofont-rounded-down"></i>
                        </a>
                        {/* <ul>
                        <li>
                          <a href="tour-details.html">Package Details</a>
                        </li>
                      </ul> */}
                      </li>
                      <li>
                        <a href="#gallery">Gallery</a>
                      </li>
                      <li>
                        <a href="#blog">
                          Blog <i className="icofont-rounded-down"></i>
                        </a>
                        {/* <ul>
                        <li>
                          <a href="blog.html">Standard Blog</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul> */}
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                ) : (
                  <div id="mobile_menu">
                    <div className="slicknav_menu">
                      <a
                        href="#"
                        aria-haspopup="true"
                        role="button"
                        tabindex="0"
                        className="slicknav_btn slicknav_collapsed"
                        style={{ outline: "none" }}
                        onClick={handleShow}
                      >
                        <span className="slicknav_menutxt"></span>
                        <span className="slicknav_icon slicknav_no-text">
                          <span className="slicknav_nav_icon icofont-navigation-menu">
                            <CiMenuBurger />
                          </span>
                        </span>
                      </a>
                      <Offcanvas
                        className="custom-offcanvas"
                        show={show}
                        onHide={handleClose}
                        style={{
                          maxWidth: "200px",
                          marginTop: "60px",
                          borderRadius: "0 10px 10px 10px",
                        }}
                      >
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body
                          style={{
                            textAlign: "left",
                          }}
                        >
                          <nav
                            className="slicknav_nav slicknav_hidden"
                            aria-hidden="true"
                            role="menu"
                            style={{ outline: "none" }}
                          >
                            <ul>
                              <li>
                                <a href="#home" role="menuitem">
                                  Home
                                </a>
                              </li>
                              <li>
                                <a href="#service" role="menuitem">
                                  Service
                                </a>
                              </li>
                              <li>
                                <a href="#top_deals" role="menuitem">
                                  Top deals
                                </a>
                              </li>

                              <li>
                                <a href="#gallery" role="menuitem">
                                  Gallery
                                </a>
                              </li>

                              <li>
                                <a href="#contact" role="menuitem">
                                  Contact
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </Offcanvas.Body>
                      </Offcanvas>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        id="home"
        className="home-slider slick-initialized slick-slider"
        tabIndex="-1"
      >
        <Slider {...settings}>
          <div>
            <div
              className="single_home_slide"
              style={{
                backgroundImage: `url("https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                display: "inline-block",
              }}
            >
              <div className="slide_overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <div className="hero-text">
                        <h1>Welcome To The Travel</h1>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. <br />
                          Lorem Ipsum has been the industry's standard .
                        </p>
                        <a
                          href="#special_package"
                          className="btn btn-default btn-home-bg"
                          tabIndex="-1"
                        >
                          Booking Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="single_home_slide"
              style={{
                backgroundImage: `url("https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                display: "inline-block",
              }}
            >
              <div className="slide_overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <div className="hero-text">
                        <h1>Choose The Best Tour Package</h1>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. <br />
                          Lorem Ipsum has been the industry's standard .
                        </p>
                        <a
                          href="#special_package"
                          className="btn btn-default btn-home-bg"
                          tabIndex="-1"
                        >
                          Booking Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="single_home_slide"
              style={{
                backgroundImage: `url("	https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                display: "inline-block",
              }}
            >
              <div className="slide_overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <div className="hero-text">
                        <h1>Travel To The Beautiful Place</h1>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. <br />
                          Lorem Ipsum has been the industry's standard .
                        </p>
                        <a
                          href="#special_package"
                          className="btn btn-default btn-home-bg"
                          tabIndex="-1"
                        >
                          Booking Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        {/* <button
          className="slick-next slick-arrow"
          aria-label="Next"
          type="button"
          style={{ display: "block" }}
        >
          Next
        </button> */}
      </section>
    </>
  );
}

export default Navbar;
