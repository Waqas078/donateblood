import React from "react";
import "./UploadBloodEvent.css";
import Footer from "../../Member/Footer/Footer";
import Navbar from "../Sidenav/Navbar";
function UploadBloodEvents() {
  return (
    <div className="background">
      <Navbar />
      <div className="p-4">
        <div className="welcome">
          <div className="content rounded-3 p-3">
            <h1 className="fs-3">Upload-Events</h1>
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
                        <div class="form-group">
                          <span class="form-labe">Tittle of Event</span>
                          <input
                            class="form-control"
                            type="text"
                            placeholder="City"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <span class="form-labe">Descripition Event</span>
                          <textarea
                            className="Textareabd"
                            id="w3review"
                            name="w3review"
                            rows="4"
                            cols="120"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div class="col-md-12">
                        <div class="for-btn">
                          <button class="submi-btn">Upload Event</button>
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
      <Footer />
    </div>
  );
}

export default UploadBloodEvents;
