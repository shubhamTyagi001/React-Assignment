import React from "react";
import "./detail.css";
function Details() {
  return (
    <div>
      <section className="complete-project-area counter_feature section-padding">
        <div className="container">
          <div className="row ">
            <div className="col-md-3 col-sm-6 col-xs-12 no-padding">
              <div className="single-project-complete">
                <i className="icofont-users-alt-3"></i>
                <h2 className="counter-num">32650</h2>
                <h3>Happy Customers</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12 no-padding">
              <div className="single-project-complete">
                <i className="icofont-airplane"></i>
                <h2 className="counter-num">1821</h2>
                <h3>Amazing Tours</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12 no-padding">
              <div className="single-project-complete">
                <i className="icofont-handshake-deal"></i>
                <h2 className="counter-num">5660</h2>
                <h3>In Business</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12 no-padding">
              <div className="single-project-complete brnone">
                <i className="icofont-live-support"></i>
                <h2 className="counter-num">11859</h2>
                <h3>Support Cases</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Details;
