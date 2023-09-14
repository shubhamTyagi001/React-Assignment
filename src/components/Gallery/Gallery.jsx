import React from "react";
import "./gallery.css";
import Slider from "react-slick";

function Gallery() {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1078,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div>
      <section id="gallery" class="our_gallery">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 aos-init aos-animate" data-aos="fade-up">
              <div class="section-title text-center">
                <span>Tour Gallery</span>
                <h2>
                  Best Tourist's Shared <br /> Photos
                </h2>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 padding_0">
              <div id="gallery-slider">
                <Slider {...settings}>
                  <div>
                    <div
                      class="single_gallery"
                      style={{ width: "200%", display: "inline-block" }}
                    >
                      <img
                        src={
                          "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg"
                        }
                        class="img-gallery"
                        alt=""
                      />
                      <a
                        class="gallery_enlarge_icon"
                        href="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg"
                        title="Germany"
                        tabindex="0"
                      >
                        <i class="icofont-resize"></i>
                      </a>
                      <h4>Germany</h4>
                    </div>
                  </div>
                  <div>
                    <div
                      class="single_gallery"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <img
                        src={
                          "	https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg"
                        }
                        class="img-gallery"
                        alt=""
                      />
                      <a
                        class="gallery_enlarge_icon"
                        href="	https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg"
                        title="London"
                        tabindex="0"
                      >
                        <i class="icofont-resize"></i>
                      </a>
                      <h4>London</h4>
                    </div>
                  </div>
                  <div>
                    <div
                      class="single_gallery"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <img
                        src="	https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_960_720.jpg"
                        class="img-gallery"
                        alt=""
                      />
                      <a
                        class="gallery_enlarge_icon"
                        href="	https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_960_720.jpg"
                        title="New York"
                        tabindex="0"
                      >
                        <i class="icofont-resize"></i>
                      </a>
                      <h4>New York</h4>
                    </div>
                  </div>
                  <div>
                    <div
                      class="single_gallery"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <img
                        src={
                          "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg"
                        }
                        class="img-gallery"
                        alt=""
                      />
                      <a
                        class="gallery_enlarge_icon"
                        href="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg"
                        title="China"
                        tabindex="0"
                      >
                        <i class="icofont-resize"></i>
                      </a>
                      <h4>China</h4>
                    </div>
                  </div>
                  <div>
                    <div
                      class="single_gallery"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <img
                        src={
                          "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg"
                        }
                        class="img-gallery"
                        alt=""
                      />
                      <a
                        class="gallery_enlarge_icon"
                        href="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg"
                        title="Malyasia"
                        tabindex="-1"
                      >
                        <i class="icofont-resize"></i>
                      </a>
                      <h4>Malyasia</h4>
                    </div>
                  </div>

                  <div>
                    <div
                      class="single_gallery"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <img
                        src={
                          "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg"
                        }
                        class="img-gallery"
                        alt=""
                      />
                      <a
                        class="gallery_enlarge_icon"
                        href="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg"
                        title="Canada"
                        tabindex="-1"
                      >
                        <i class="icofont-resize"></i>
                      </a>
                      <h4>Canada</h4>
                    </div>
                  </div>
                  <div>
                    <div
                      class="single_gallery"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <img
                        src={
                          "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg"
                        }
                        class="img-gallery"
                        alt=""
                      />
                      <a
                        class="gallery_enlarge_icon"
                        href="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg"
                        title="Japan"
                        tabindex="-1"
                      >
                        <i class="icofont-resize"></i>
                      </a>
                      <h4>Japan</h4>
                    </div>
                  </div>
                  <div>
                    <div
                      class="single_gallery"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <img
                        src={
                          "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg"
                        }
                        class="img-gallery"
                        alt=""
                      />
                      <a
                        class="gallery_enlarge_icon"
                        href="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg"
                        title="India"
                        tabindex="-1"
                      >
                        <i class="icofont-resize"></i>
                      </a>
                      <h4>India</h4>
                    </div>
                  </div>
                  <div>
                    <div
                      class="single_gallery"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <img
                        src={
                          "https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_960_720.jpg"
                        }
                        class="img-gallery"
                        alt=""
                      />
                      <a
                        class="gallery_enlarge_icon"
                        href="https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_960_720.jpg"
                        title="Bangladesh"
                        tabindex="-1"
                      >
                        <i class="icofont-resize"></i>
                      </a>
                      <h4>Bangladesh</h4>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
