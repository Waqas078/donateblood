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
                        {/* Select Bank or Hospital  */}
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Select Action</span>
                            <select class="form-control" required>
                              <option>Select....</option>
                              <option>Hospital</option>
                              <option>Bloodbank</option>                              
                            </select>
                            <span class="select-arrow"></span>
                          </div>
                        </div>

                        {/* Search Blood bank  */}
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Search Blood Bank</span>
                            <input
                              class="form-control"
                              type="Search"
                              placeholder="Blood Bank"
                            />
                          </div>
                        </div>
                        {/* Search hospital  */}
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Hospital</span>
                            <input
                              class="form-control"
                              type="Search"
                              placeholder="Hospital"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
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
