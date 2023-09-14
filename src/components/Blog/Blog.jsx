import React from "react";
import "./blog.css";

function Blog() {
  return (
    <>
      <section id="blog" class="blog_section">
        <div class="container">
          <div class="row">
            <div class="col-md-12 aos-init aos-animate" data-aos="fade-up">
              <div class="section-title text-center">
                <span>Latest Blog Posts</span>
                <h2>
                  Our Latest Article <br /> For Travellers
                </h2>
              </div>
            </div>
          </div>

          <div class="row aos-init aos-animate" data-aos="fade-up">
            <div class="col-lg-4 col-md-6">
              <div class="single_blog">
                <div class="blog_image">
                  <img
                    class="blog-photo"
                    alt="Blog Photo"
                    src="http://themesvila.com/html-templates/turista/assets/img/blog/2.jpg"
                  />
                </div>

                <div class="blog-text">
                  <h4>
                    <a href="#">The Most Beautiful Place In The World</a>
                  </h4>
                  <div class="post-meta">
                    <span>
                      <i class="icofont-clock-time"></i> 20 Oct 2019
                    </span>

                    <span>
                      <i class="icofont-comment"></i> 21 Comments
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="single_blog">
                <div class="blog_image">
                  <img
                    class="blog-photo"
                    alt="Blog Photo"
                    src="http://themesvila.com/html-templates/turista/assets/img/blog/3.jpg"
                  />
                </div>
                <div class="blog-text">
                  <h4>
                    <a href="#">The Most Beautiful Place In The World</a>
                  </h4>
                  <div class="post-meta">
                    <span>
                      <i class="icofont-clock-time"></i> 20 Oct 2019
                    </span>

                    <span>
                      <i class="icofont-comment"></i> 21 Comments
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="single_blog">
                <div class="blog_image">
                  <img
                    class="blog-photo"
                    alt="Blog Photo"
                    src="	http://themesvila.com/html-templates/turista/assets/img/blog/1.jpg"
                  />
                </div>
                <div class="blog-text">
                  <h4>
                    <a href="#">The Most Beautiful Place In The World</a>
                  </h4>
                  <div class="post-meta">
                    <span>
                      <i class="icofont-clock-time"></i> 20 Oct 2019
                    </span>

                    <span>
                      <i class="icofont-comment"></i> 21 Comments
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
