import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-widget">
                <div className="foot-logo">
                  <a href="index.html">
                    <img
                      src="http://themesvila.com/html-templates/turista/assets/img/logo.png"
                      alt=""
                    />
                  </a>
                </div>
                <p className="copyright_text">
                  Copyright © 2019 | All Rights Reserved.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer-widget">
                <h3 className="fot-title">Quick Links</h3>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Term</a>
                  </li>
                  <li>
                    <a href="#">Privacy &amp; Policy</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer-widget">
                <h3 className="fot-title">About Us</h3>
                <ul>
                  <li>
                    <a href="#">Our Story</a>
                  </li>
                  <li>
                    <a href="#">Travel Blog &amp; Tips</a>
                  </li>
                  <li>
                    <a href="#">Working With Us</a>
                  </li>
                  <li>
                    <a href="#">Tour Guid</a>
                  </li>
                  <li>
                    <a href="#">Be Our Partner</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer-widget">
                <h3 className="fot-title">Support</h3>
                <ul>
                  <li>
                    <a href="#">Customer Support</a>
                  </li>
                  <li>
                    <a href="#">Privacy &amp; Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Condition</a>
                  </li>
                  <li>
                    <a href="#">Forum</a>
                  </li>
                  <li>
                    <a href="#">Tour Guid</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
