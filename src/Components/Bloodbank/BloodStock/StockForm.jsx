import React from "react";
import Footer from "../../Member/Footer/Footer";
import Navbar from "../Sidenav/Navbar";
import "./Stock.css";
function Donate() {
  return (
    <body>
      <Navbar />
      <div className="Membermain">
        <div class="p-4">
          <div class="welcomeDonateblood ">
            <div class="content rounded-4 p-4">
              <h1 class="fs-4">Update Stocks</h1>
            </div>
          </div>
        </div>
        <section class="we-offer-area text-center bg-gray">
          <div class="container">
            <div class="row">
              <div className="FormStyles">
                <div class="row">
                  <div class="booking-form">
                    <form>
                      <div class="row">
                        {/* A+ div */}
                        <div class="col-md-4">
                          <span class="form-label">Blood-type</span>
                          <label className="labeel">
                            <input className="check" type="checkbox" />
                            <span className="span">A+</span>
                          </label>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Available Bottles </span>
                            <input
                              class="form-control"
                              type="text"
                              value="12"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Add</span>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="Add"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        {/* A- div */}
                        <div class="col-md-4">
                          <span class="form-label">Blood-type</span>
                          <label className="labeel">
                            <input
                              className="check"
                              type="checkbox"
                              name="radio"
                            />
                            <span className="span">A-</span>
                          </label>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Available Bottles </span>
                            <input
                              class="form-control"
                              type="text"
                              value="12"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Add</span>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="Add"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        {/* B+ div */}
                        <div class="col-md-4">
                          <span class="form-label">Blood-type</span>
                          <label className="labeel">
                            <input
                              className="check"
                              type="checkbox"
                              name="radio"
                            />
                            <span className="span">B+</span>
                          </label>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Available Bottles </span>
                            <input
                              class="form-control"
                              type="text"
                              value="12"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Add</span>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="Add"
                            />
                          </div>
                        </div>
                      </div>{" "}
                      <div class="row">
                        {/* B- div */}
                        <div class="col-md-4">
                          <span class="form-label">Blood-type</span>
                          <label className="labeel">
                            <input
                              className="check"
                              type="checkbox"
                              name="radio"
                            />
                            <span className="span">B-</span>
                          </label>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Available Bottles </span>
                            <input
                              class="form-control"
                              type="text"
                              value="12"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Add</span>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="Add"
                            />
                          </div>
                        </div>
                      </div>{" "}
                      <div class="row">
                        {/* O+ div */}
                        <div class="col-md-4">
                          <span class="form-label">Blood-type</span>
                          <label className="labeel">
                            <input
                              className="check"
                              type="checkbox"
                              name="radio"
                            />
                            <span className="span">O+</span>
                          </label>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Available Bottles </span>
                            <input
                              class="form-control"
                              type="text"
                              value="12"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Add</span>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="Add"
                            />
                          </div>
                        </div>
                      </div>{" "}
                      <div class="row">
                        {/* O- div */}
                        <div class="col-md-4">
                          <span class="form-label">Blood-type</span>
                          <label className="labeel">
                            <input
                              className="check"
                              type="checkbox"
                              name="radio"
                            />
                            <span className="span">O-</span>
                          </label>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Available Bottles </span>
                            <input
                              class="form-control"
                              type="text"
                              value="12"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Add</span>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="Add"
                            />
                          </div>
                        </div>
                      </div>{" "}
                      <div class="row">
                        {/* AB+ div */}
                        <div class="col-md-4">
                          <span class="form-label">Blood-type</span>
                          <label className="labeel">
                            <input
                              className="check"
                              type="checkbox"
                              name="radio"
                            />
                            <span className="span">AB+</span>
                          </label>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Available Bottles </span>
                            <input
                              class="form-control"
                              type="text"
                              value="12"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Add</span>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="Add"
                            />
                          </div>
                        </div>
                      </div>{" "}
                      <div class="row">
                        {/* AB- div */}
                        <div class="col-md-4">
                          <span class="form-label">Blood-type</span>
                          <label className="labeel">
                            <input
                              className="check"
                              type="checkbox"
                              name="radio"
                            />
                            <span className="span">AB-</span>
                          </label>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Available Bottles </span>
                            <input
                              class="form-control"
                              type="text"
                              value="12"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Add</span>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="Add"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-btn">
                          <button class="submit-btn">Update</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </body>
  );
}

export default Donate;
