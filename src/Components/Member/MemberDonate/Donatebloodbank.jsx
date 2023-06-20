import React, { useState, useEffect } from "react";
import { bloodbankRequestsData } from "../../../api";
import Donatecard from "../DonateCards/Donatecard";

function Donatebloodbank() {
  const [allData, setallData] = useState([]);
  const fetchallData = async () => {
    const { data } = await bloodbankRequestsData();
    console.log(data);
    setallData(data);
  };

  useEffect(() => {
    fetchallData();
  }, []);
  return (
    <div>
      <div className="wrapperr">
        {allData.map((post) => (
          <Donatecard
            postId={post._id}
            postTitle={post.reqTitle}
            postLocation={post.reqCity}
            postGroup={post.bloodGroup}
            postCreator={post.OrganisationName}
          />
        ))}
      </div>
      {/* <div className="FormStyles">
      {" "}
      <div class="row">
        <div class="booking-form">
          <form>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <span class="form-label">Select State</span>
                  <select class="form-control">
                    <option>Select....</option>
                    <option>Punjab</option>
                    <option>Sindh</option>
                    <option>Khyber Pakhtunkhawa</option>
                    <option>Balochistan</option>
                    <option>Azad Kashmir</option>
                    <option>Gilgit-Baltistan</option>
                  </select>
                  <span class="select-arrow"></span>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <span class="form-label">Select City</span>
                  <select class="form-control">
                    <option>Select....</option>
                    <option>Rawalpindi</option>
                    <option> Rawalpindi</option>
                    <option>Rawalpindi</option>
                    <option>Rawalpindi </option>
                    <option>Rawalpindi</option>
                  </select>
                  <span class="select-arrow"></span>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <span class="form-label">Select Bloodbank</span>
                  <select class="form-control">
                    <option>Select....</option>
                    <option>Rawalpindi</option>
                    <option> Rawalpindi</option>
                    <option>Rawalpindi</option>
                    <option>Rawalpindi </option>
                    <option>Rawalpindi</option>
                  </select>
                  <span class="select-arrow"></span>
                </div>
              </div>
            </div>{" "}
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <span class="form-label">Select Date</span>
                  <input class="form-control" type="date" required />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <span class="form-label">Enter your Favourite Time</span>
                  <input class="form-control" type="time" required />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-btn">
                  <button class="submit-btn">Book Appointnment</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="p-4">
          <div class="welcomeH">
            <div class="content rounded-3 p-3">
              <h1 class="fs-3">Donate-Blood</h1>
            </div>
          </div>
        </div> */}
      {/* <BloodData /> */}
    </div>
  );
}

export default Donatebloodbank;
