import React from "react";
import "./MemberDonate.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Sidenav/Navbar";
function Donate() {
  return (
    <body>
      <Navbar />
      <div className="Membermain">
        <div class="p-4">
          <div class="welcomeDonateblood ">
            <div class="content rounded-3 p-3">
              <h1 class="fs-3">Donate-Blood</h1>
            </div>
          </div>
        </div>
        <h2 className="Book">Book Your Appointment</h2>
        <section class="we-offer-area text-center bg-gray">
          <div class="container">
            <div class="row"></div>
            <div class="row our-offer-items less-carousel">
              <div class="col-md-4 col-sm-12 tup">
                <Link to="DonateHospital">
                  <div class="lop">
                    <i class="fas fa-hospital"></i>
                    <h3>
                      Donate to <br /> Hospitals
                    </h3>
                  </div>
                </Link>
              </div>

              <div class="col-md-4 col-sm-12 tup">
                <Link to="Donatebloodbank">
                  <div class="lop">
                    <i class="fas line-font-lg fa  fa-tint"></i>
                    <h3>
                      Donate to <br /> Bloodbank
                    </h3>
                  </div>
                </Link>
              </div>

              <div class="col-md-4 col-sm-12 tup">
                <Link to="Donateevent">
                  <div class="lop">
                    <i class="fas fa fa-calendar" aria-hidden="true"></i>
                    <h3>
                      Donate to <br /> Member
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
            <Outlet />
          </div>
        </section>
      </div>
      <Footer />
    </body>
  );
}

export default Donate;
