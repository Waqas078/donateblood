import React from "react";
import "./Mregister.css";
import { Link } from "react-router-dom";

function Mregister() {
  return (
    <div>
      <div class="container">
        <div class="row-flexbox">
          <div class="col-md-4 ite">
            <div class="fetured-box">
              <div class="box-content">
                <h4 class="text-uppercase mohsin">Return policy</h4>
                <ul>
                  <li>
                    An item can only be borrowed Monday-Friday between 9am -
                    5pm.
                  </li>
                  <li>
                    All items must be returned at most 10 days after the date
                    the item was borrowed.
                  </li>
                  <li>
                    All items have a 10 day loan period and must be returned by
                    4pm on the due date.{" "}
                  </li>
                  <li>
                    Students will be charged $10 per item for each day the item
                    is not returned past the due date.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4 ite">
            <div class="fetured-box">
              <div class="box-content">
              <h3
                    class="h3 "
                    data-mh="appointment-block-heading"
                  >
                    Register as a Member
                  </h3>
                  <div
                    data-mh="appointment-block-text"
                  >
                    <p>
                      Register if you want to donate and recieve Blood and avail
                      our services.
                    </p>
                  </div>{" "}
                  <Link className="Create">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Create Account</span>
                  </Link>
              </div>
            </div>
          </div>
          <div class="col-md-4 ite">
            <div class="fetured-box">
              <div class="box-content">
                <h4 class="text-uppercase mohsin">Maintenance &amp; Support</h4>
                <p>
                  Application Management CRM and ERP implementation Performance
                  Optimization Application Modernization Payment Gateway
                  Integration Software Testing{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Mregister;
