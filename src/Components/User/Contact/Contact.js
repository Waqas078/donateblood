import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div>
      <section class="contact" id="contact">
        <div class="overlay">
          <div class="container">
            <div class="heading text-center">
              <h2>
                Contact
                <span> Us </span>
              </h2>
              <p>
                Here Enter your details and send us your Message or Problem if you have any
              </p>
            </div>
            <div class="row">
              <div class="col-md-5">
                <div class="title">
                  <h3>Contact detail</h3>
                  <p>
                    Contact US here if you have any other problem.
                  </p>
                </div>
                <div class="content">
                  <div class="info">
                    <i class="fas fa-mobile-alt"></i>
                    <h4 class="d-inline-block">
                      PHONE :
                      <br />
                      <span>+923149501167</span>
                    </h4>
                  </div>
                  <div class="info">
                    <i class="far fa-envelope"></i>
                    <h4 class="d-inline-block">
                      EMAIL :
                      <br />
                      <span>wali13641@gmail.com</span>
                    </h4>
                  </div>
                  <div class="info">
                    <i class="fas fa-map-marker-alt"></i>
                    <h4 class="d-inline-block">
                      ADDRESS :<br />
                      <span>COMSATS University Islamabad, Wah Campus</span>
                    </h4>
                  </div>
                </div>
              </div>

              <div class="col-md-7">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div class="col-sm-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      rows="5"
                      id="comment"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button class="send" type="submit">
                    Send Now!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
