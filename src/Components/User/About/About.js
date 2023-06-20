import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
function AboutMain() {
  return (
    <div>
      <section className="about-section">
        <div className="container">
          <div className="row clearfix">
            {/*Content Column*/}
            <div className="content-column col-md-6 col-sm-12 col-xs-12">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="title">Donateblood.pk</div>
                  <h1>Who we are?</h1>
                </div>
                <div className="text">
                  Donateblood.pk is an online blood banking system where users
                  can register to donate and request blood from other users,
                  Hospitals, and blood banks, and can interact with them to
                  resolve issues of blood need. Also, the site has a system for
                  Events in formation from where users get updates about
                  trending Donation campaigns.Donateblood.pk helps organizations
                  maintain and store their data and manage records of their
                  users and also can request blood from users and other
                  organizations.
                </div>
                <div className="email">
                  Motive:{" "}
                  <span className="theme_color">
                    Be the eason for someones happniess
                  </span>
                </div>
                <a className="theme-btn btn-style-three">
                  <Link to="/AboutMain">Read More</Link>
                </a>
              </div>
            </div>

            {/*Image Column*/}
            <div className="image-column col-md-6 col-sm-12 col-xs-12">
              <div
                className="inner-column "
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="image">
                  <img className="img" src={require("./imgg3.jpg")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMain;
