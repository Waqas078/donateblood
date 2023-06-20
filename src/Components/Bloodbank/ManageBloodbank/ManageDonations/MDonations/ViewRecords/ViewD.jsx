import Navbar from "../../../../Sidenav/Navbar";
import React from "react";
import ViewDonationTables from "./AnnouceTables/ViewDonationTables";
import Footer from "../../../../../Member/Footer/Footer";
import "./Viewrecords.css";
function ViewD() {
  return (
    <div className="background">
      <Navbar />
      <div className="p-4">
        <div className="welcome">
          <div className="content rounded-3 p-3">
            <h1 className="fs-3">View Donations Records</h1>
          </div>
        </div>
      </div>
      <h2 className="Book">Add Donations records</h2>
      <div className="p-4 PNew">
        <form action="Search" className="Search-from">
        <div class="col-md-6 col-sm-12 tup">
          <div class="input-group">
            <input
              type="search"
              class="form-control rounded Search-input"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" className="Serach-button">
              search
            </button>
          </div>
        </div>
        </form>
        <ViewDonationTables />
      </div>

      <Footer />
    </div>
  );
}

export default ViewD;
