import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Mainreg.css";
export default function Mainreg() {
  return (
    <div>
      <div className="main">
        <div data-container="true" className="contain">
          <div className="row clearfix">
            <div className="col-md-4 column">
              <div>
                <div className="appointment-pod appointment-pod--green">
                  <div className="appointment-pod__image">
                    <img
                      className="appointment-pod__image-1"
                      src="/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/7746/register-tick.png?anchor=center&amp;mode=crop&amp;quality=70&amp;width=45&amp;height=45&amp;rnd=131810500860000000"
                      alt=""
                    />
                  </div>
                  <h3
                    class="h3 appointment-pod__heading"
                    data-mh="appointment-block-heading"
                  >
                    Register as a Member
                  </h3>
                  <div
                    class="appointment-pod__text"
                    data-mh="appointment-block-text"
                  >
                    <p>
                      Register if you want to donate and recieve Blood and avail
                      our services.
                    </p>
                  </div>{" "}
                  <Link to='/RegisterM' className="Create">
                    <span className="circle" aria-hidden="true">
                    </span>
                    <span className="button-text">Create Account</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 column">
              <div>
                <div className="appointment-pod appointment-pod--green">
                  <div className="appointment-pod__image">
                    <img
                      className="appointment-pod__image-1"
                      src="/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/7746/register-tick.png?anchor=center&amp;mode=crop&amp;quality=70&amp;width=45&amp;height=45&amp;rnd=131810500860000000"
                      alt=""
                    />
                  </div>
                  <h3
                    class="h3 appointment-pod__heading"
                    data-mh="appointment-block-heading"
                  >
                    Register as a Blood Bank
                  </h3>
                  <div
                    class="appointment-pod__text"
                    data-mh="appointment-block-text"
                  >
                    <p>
                      Register your Blood Bank to avail our services and help
                      more people.
                    </p>
                  </div>{" "}
                  <Link to='/RegisterM' className="Create">
                    <span className="circle" aria-hidden="true">
                    </span>
                    <span className="button-text">Create Account</span>
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-4 column">
              <div>
                <div className="appointment-pod appointment-pod--green">
                  <div className="appointment-pod__image">
                    <img
                      className="appointment-pod__image-1"
                      src="/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/7746/register-tick.png?anchor=center&amp;mode=crop&amp;quality=70&amp;width=45&amp;height=45&amp;rnd=131810500860000000"
                      alt=""
                    />
                  </div>
                  <h3
                    class="h3 appointment-pod__heading"
                    data-mh="appointment-block-heading"
                  >
                    Register as a Hospital
                  </h3>
                  <div
                    class="appointment-pod__text"
                    data-mh="appointment-block-text"
                  >
                    <p>
                      Register your Hospital to avail our services and help more
                      people.
                    </p>
                  </div>
                  <Link to='/RegisterM' className="Create">
                    <span className="circle" aria-hidden="true">
                    </span>
                    <span className="button-text">Create Account</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
