import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Sidenav/Navbar";
import "./Manage.css";
function MainRequestBH() {
  return (
    <body>
      <Navbar />
      <div className="Membermain">
        <div class="p-4">
          <div class="welcomeDonateblood ">
            <div class="content rounded-3 p-3">
              <h1 class="fs-3">Send_Request</h1>
            </div>
          </div>
        </div>
        <h2 className="Book">Send-Request-BloodBank-Hospital</h2>
        <section class="we-offer-area text-center bg-gray">
          <div class="container">
            <div class="row"></div>
            <div class="row our-offer-items less-carousel">
              <div class="col-md-4 col-sm-12 tuppp">
                <Link to="/BloodBrequest">
                  <div class="loopp">
                    <i class="fa fa-file" aria-hidden="true"></i>
                    <h3>
                      Request  <br /> Member
                    </h3>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-12 tuppp">
                <Link to="/BRequestBH">
                  <div class="loopp">
                  <i class="fas fa-hospital"></i>
                    <h3>
                      Request bank-<br />Hospital
                    </h3>
                  </div>
                </Link>
              </div>

              <div class="col-md-4 col-sm-12 tuppp">
                <Link to="/BViewRecordBH">
                  <div class="loopp">
                    <i class="fa fa-eye" aria-hidden="true"></i>
                    <h3>
                      View <br /> Records
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </body>
  );
}

export default MainRequestBH;
