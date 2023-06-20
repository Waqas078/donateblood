import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Sidenav/Navbar";
import "./Manage.css";
function ManageDonations() {
  return (
    <body>
      <Navbar />
      <div className="Membermain">
        <div class="p-4">
          <div class="welcomeDonateblood ">
            <div class="content rounded-3 p-3">
              <h1 class="fs-3">Record Managements</h1>
            </div>
          </div>
        </div>
        <h2 className="Book">Manage Donations And Requests</h2>
        <section class="we-offer-area text-center bg-gray">
          <div class="container">
            <div class="row"></div>
            <div class="row our-offer-items less-carousel">
              <div class="col-md-6 col-sm-12 tup">
                <Link to="/addRecords">
                  <div class="loop">
                    <i class="fass fa fa-file" aria-hidden="true"></i>
                    <h3>
                      Add <br /> Records
                    </h3>
                  </div>
                </Link>
              </div>

              <div class="col-md-6 col-sm-12 tup">
                <Link to="/ViewH">
                  <div class="loop">
                    <i class="fass fa fa-eye" aria-hidden="true"></i>
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

export default ManageDonations;
