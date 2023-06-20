import React from "react";
import "./BankProfile.css";
import Navbar from "../Sidenav/Navbar";
import Footer from "../Footer/Footer";
function UserProfile() {
  return (    
    <div className="background">        
      <Navbar />
      <div class="p-4">
        <div class="welcomeDonateblood ">
          <div class="content rounded-3 p-3">
            <h1 class="fs-3">Bank-Profile</h1>
          </div>
        </div>
      </div>
      <div className="back-color container rounded mt-5">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            </div>
          </div>
          <div className="col-md-8">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex flex-row align-items-center back"></div>
                <button className="ProfileButton" type="submit" value="Submit">
                  Edit Profile
                </button>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="last-name"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="address"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Postal/Zip Code"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CNIC"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Date of Birth"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <select className="form-control">
                    <option> Any Disease?</option>
                    <option>Yes</option>
                    <option> No</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <select className="form-control">
                    <option> Any Alerg?</option>
                    <option>Yes</option>
                    <option> No</option>
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <select className="form-control">
                    <option>Any Cardic problem?</option>
                    <option>Yes</option>
                    <option> No</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <select className="form-control">
                    <option> Any Bleeding disorders?</option>
                    <option>Yes</option>
                    <option> No</option>
                  </select>
                </div>
              </div>
              <div className="mt-5 text-right">
                <button className="ProfileButto" type="submit" value="Submit">
                  Save Profile Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default UserProfile;
