import React from "react";
import StatusTables from "./StausTables/StatusTables";
import Navbar from "../Sidenav/Navbar";
// import Footer from "../Footer/Footer";
import "./Status.css";
function Status() {
  return (
    <div style={{ height: "100%" }} className="Dashboard">
      <Navbar />
      <div className="p-4">
        <div className="welcome">
          <div className="content rounded-3 p-3">
            <h1 className="fs-3">Status</h1>
          </div>
        </div>
        <StatusTables />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Status;
