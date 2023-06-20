import React from "react";
import Footer from "../../Member/Footer/Footer";
import Navbar from "../Sidenav/Navbar";
function Donate() {
  return (
    <body>
      <Navbar />
      <div className="Membermain">
        <div class="p-4">
          <div class="welcomeDonateblood ">
            <div class="content rounded-3 p-3">
              <h1 class="fs-3">Request-Blood</h1>
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
                        <div class="col-md-12">
                          <span class="form-label">Blood Type</span>
                          <form className="formm">
                            <label className="labeel">
                              <input
                                className="check"
                                type="radio"
                                name="radio"
                                checked
                              />
                              <span className="span">A+</span>
                            </label>
                            <label className="labeel">
                              <input
                                className="check"
                                type="radio"
                                name="radio"
                              />
                              <span className="span">A-</span>
                            </label>
                            <label className="labeel">
                              <input
                                className="check"
                                type="radio"
                                name="radio"
                              />
                              <span className="span">B+</span>
                            </label>
                            <label className="labeel">
                              <input
                                className="check"
                                type="radio"
                                name="radio"
                                checked
                              />
                              <span className="span">B-</span>
                            </label>
                            <label className="labeel">
                              <input
                                className="check"
                                type="radio"
                                name="radio"
                              />
                              <span className="span">O+</span>
                            </label>
                            <label className="labeel">
                              <input
                                className="check"
                                type="radio"
                                name="radio"
                              />
                              <span className="span">O-</span>
                            </label>
                            <label className="labeel">
                              <input
                                className="check"
                                type="radio"
                                name="radio"
                              />
                              <span className="span">AB+</span>
                            </label>
                            <label className="labeel">
                              <input
                                className="check"
                                type="radio"
                                name="radio"
                              />
                              <span className="span">AB-</span>
                            </label>
                          </form>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">City Name</span>
                            <input
                              class="form-control"
                              type="text"
                              placeholder="City"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">Address</span>
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Address"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-3">
                          <div class="form-group">
                            <span class="form-label">Select Date</span>
                            <input class="form-control" type="date" required />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <span class="form-label">Required Time</span>
                            <input class="form-control" type="date" required />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <span class="form-label">No of Bottles</span>
                            <input
                              class="form-control"
                              type="number"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <div class="form-group">
                              <span class="form-label">
                                Reason of Requistion
                              </span>
                              <input
                                class="form-control"
                                type="text"
                                placeholder="Reason"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-3">
                          <span class="form-label">Emergency Case</span>
                          <div className="formm">
                            <label className="labeel">
                              <input
                                className="check"
                                type="radio"
                                name="radio"
                              />
                              <span className="span">Yes</span>
                            </label>
                            <label className="labeel">
                              <input
                                className="check"
                                type="radio"
                                name="radio"
                              />
                              <span className="span">No</span>
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">Descripition</span>
                            <textarea
                              className="Textareab"
                              id="w3review"
                              name="w3review"
                              rows="4"
                              cols="30"
                              type="text"
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-btn">
                            <button class="submit-btn">Send Request</button>
                          </div>
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
