import React, { useState } from "react";
import "./MemberRequest.css";
import Footer from "../Footer/Footer";
import Navbar from "../Sidenav/Navbar";
import Form from "react-bootstrap/Form";
import { bloodRequest } from "../../../api";
function Donate() {
  const [group, setGroup] = useState("A+");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [number, setNumber] = useState("");
  const [reason, setReason] = useState("");
  const [emergency, setEmergency] = useState("No");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log({
        group,
        city,
        address,
        date,
        time,
        number,
        reason,
        emergency,
        description,
      });
      const { data } = await bloodRequest({
        group,
        city,
        address,
        date,
        time,
        number,
        reason,
        emergency,
        description,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

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
        {/* <h2 className="Book">Book Your Appointment</h2> */}
        <section class="we-offer-area text-center bg-gray">
          <div class="container">
            <div class="row">
              <div className="FormStyles">
                <div class="row">
                  <div class="booking-form">
                    <Form onSubmit={handleSubmit}>
                      <div class="row">
                        <div class="col-md-12">
                          <span class="form-label">Blood Type</span>
                          {/* <form className="formm" > */}
                          <div
                            style={{ display: "flex" }}
                            value={group}
                            onChange={(e) => setGroup(e.target.value)}
                          >
                            <label className="labeel">
                              <input
                                className="check"
                                type="radio"
                                name="radio"
                                value="A+"
                                // checked
                              />
                              <span className="span">A+</span>
                            </label>
                            <label className="labeel">
                              <input
                                className="check"
                                type="radio"
                                value="A-"
                                name="radio"
                              />
                              <span className="span">A-</span>
                            </label>
                            <label className="labeel">
                              <input
                                value="B+"
                                className="check"
                                type="radio"
                                name="radio"
                              />
                              <span className="span">B+</span>
                            </label>
                            <label className="labeel">
                              <input
                                value="B-"
                                className="check"
                                type="radio"
                                name="radio"
                                // checked
                              />
                              <span className="span">B-</span>
                            </label>
                            <label className="labeel">
                              <input
                                value="O+"
                                className="check"
                                name="radio"
                                type="radio"
                              />
                              <span className="span">O+</span>
                            </label>
                            <label className="labeel">
                              <input
                                value="O-"
                                className="check"
                                type="radio"
                                name="radio"
                              />
                              <span className="span">O-</span>
                            </label>
                            <label className="labeel">
                              <input
                                value="AB+"
                                className="check"
                                type="radio"
                                name="radio"
                              />
                              <span className="span">AB+</span>
                            </label>
                            <label className="labeel">
                              <input
                                value="AB-"
                                className="check"
                                type="radio"
                                name="radio"
                              />
                              <span className="span">AB-</span>
                            </label>
                          </div>
                          {/* </form> */}
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">City Name</span>
                            <input
                              class="form-control"
                              type="text"
                              placeholder="City"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
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
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-3">
                          <div class="form-group">
                            <span class="form-label">Select Date</span>
                            <input
                              class="form-control"
                              type="date"
                              required
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <span class="form-label">Required Time</span>
                            <input
                              class="form-control"
                              type="time"
                              required
                              value={time}
                              onChange={(e) => setTime(e.target.value)}
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <span class="form-label">No of Bottles</span>
                            <input
                              class="form-control"
                              type="number"
                              required
                              value={number}
                              onChange={(e) => setNumber(e.target.value)}
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <div class="form-group">
                              <span class="form-label">
                                Reason of Requisition
                              </span>
                              <input
                                class="form-control"
                                type="text"
                                placeholder="Reason"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-3">
                          <span class="form-label">Emergency Case</span>
                          <div
                            className="formm"
                            value={emergency}
                            onChange={(e) => setEmergency(e.target.value)}
                          >
                            <label className="labeel">
                              <input
                                className="check"
                                value="No"
                                type="radio"
                                name="radio1"
                              />
                              <span className="span">No</span>
                            </label>
                            <label className="labeel">
                              <input
                                className="check"
                                type="radio"
                                name="radio1"
                                value="Yes"
                              />
                              <span className="span">Yes</span>
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">Description</span>
                            <textarea
                              className="Textareab"
                              id="w3review"
                              name="w3review"
                              rows="4"
                              cols="30"
                              type="text"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-btn">
                            <button type="submit" class="submit-btn">
                              Send Request
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
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
