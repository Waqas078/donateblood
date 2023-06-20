import React from "react";
import Footer from "../../../../Footer/Footer";
import Navbar from "../../../../Sidenav/Navbar";
function AddD() {
  return (
    <body>
      <Navbar />
      <div className="Membermain">
        <div class="p-4">
          <div class="welcomeDonateblood ">
            <div class="content rounded-3 p-3">
              <h1 class="fs-3">Add Records</h1>
            </div>
          </div>
        </div>
        <h2 className="Book">Add Donations and Requests records</h2>
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
                            <span class="form-label">Name</span>
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Name"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">Phone No</span>
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Phone No"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-3">
                          <div class="form-group">
                            <span class="form-label">Date</span>
                            <input class="form-control" type="date" required />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <span class="form-label">
                              No of Bottles 
                            </span>
                            <input
                              class="form-control"
                              type="number"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-btn">
                            <button class="submit-btn">Add Donations</button>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-btn">
                            <button class="submit-btn">Add Requests</button>
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

export default AddD;
