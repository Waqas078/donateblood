import React from "react";
import "./BankDashboard.css";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import { Link } from "react-router-dom";
import Footer from "../../Member/Footer/Footer";
import Navbar from "../Sidenav/Navbar";
import StockCharts from "../BloodStock/StockCharts";
import Annoucenment from "../Annoucenement/Annoucenment";
function DAshboard() {
  return (
    <>
      <div className="Dashboard">
        <Navbar />
        <div>
          <div className="p-4">
            <div className="welcome">
              <div className="content rounded-3 p-3">
                <h1 className="fs-3">Welcome to Dashboard</h1>
              </div>
            </div>
          </div>
          <div className="Padd">
            <section className="statistics mt-4">
              <div className="row">
                <div className="col-lg-3">
                  <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                    <VolunteerActivismIcon />
                    <div className="ms-3">
                      <div className="d-flex align-items-center">
                        <h3 className="mb-0">1</h3>{" "}
                        <span className="d-block ms-2">Donations</span>
                      </div>
                      <p className="fs-normal mb-0">Life time Donations</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                    <CalendarTodayIcon />
                    <div className="ms-3">
                      <div className="d-flex align-items-center">
                        <h3 className="mb-0">3</h3>{" "}
                        <span className="d-block ms-2">This Month</span>
                      </div>
                      <p className="fs-normal mb-0">This Month Donations</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                    <RequestPageIcon />
                    <div className="ms-3">
                      <div className="d-flex align-items-center">
                        <h3 className="mb-0">12</h3>{" "}
                        <span className="d-block ms-2">Requests</span>
                      </div>
                      <p className="fs-normal mb-0">Lift time Blood requests</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="box d-flex rounded-2 align-items-center p-3">
                    <CalendarTodayIcon />
                    <div className="ms-3">
                      <div className="d-flex align-items-center">
                        <h3 className="mb-0">5,245</h3>{" "}
                        <span className="d-block ms-2">Blood Requests</span>
                      </div>
                      <p className="fs-normal mb-0">
                        This Month Blood requests
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div>
          <div className="wrapper">
            <div className="card Card">
              <h3 className="card-title">Upload Events</h3>
              <div className="FAicons FAiconsy">
                <i className="fa fa-upload" aria-hidden="true"></i>
              </div>
              <p className="card-content">
                You can upload events information and can inform all users,
                hospitals and visitors on the platform.
              </p>
              <Link to="/UploadBloodEvents">
                <div className="marg">
                  <button className="card-btn1">Upload</button>
                </div>
              </Link>
            </div>
            <div className="card Card">
              <h3 className="card-title">Edit Profile</h3>
              <div className="FAicons FAiconsy">
                <i className="fas fa-user-edit"></i>
              </div>
              <p className="card-content">
                If you Want to Edit your profile click on the button below and
                provide 100 percent accurate information.
              </p>
              <Link to="/BankProfile">
                <div className="marg">
                  <button className="card-btn2">Edit-Profile</button>
                </div>
              </Link>
            </div>
            <div className="card Card">
              <h3 className="card-title">Request Blood</h3>
              <div className="FAicons FAiconsy">
                <i className="fa fa-wheelchair"></i>
              </div>
              <p className="card-content">
                If you want to request the blood click on the button below and
                check your nearest hospital and make a request for blood.
              </p>
              <Link to="/MainBRequestBH">
                <div className="marg">
                  <button className="card-btn3">Request-blood</button>
                </div>
              </Link>
            </div>
            <div className="card Card">
              <h3 className="card-title">Chat</h3>
              <div className="FAicons FAiconsy">
                <i class="fas fa-comment-dots"></i>
              </div>
              <p className="card-content">
                You can chat with Admin, Users, and Hospitals if you desire
              </p>
              <Link to="">
                <div className="margg">
                  <button className="card-btn4">Chat</button>
                </div>
              </Link>
            </div>
            <div className="card Card">
              <h3 className="card-title">Manage records</h3>
              <div className="FAicons FAiconsy">
                <i class="fa fa-tasks" aria-hidden="true"></i>
              </div>
              <p className="card-content">
                You Can Manage, Add and Delete Donation records of Members,
                Hospitals And Other Bloodbanks.
              </p>
              <Link to="/ManageRecords">
                <div className="marg">
                  <button className="card-btn5">Manage</button>
                </div>
              </Link>
            </div>
            <div className="card Card">
              <h3 className="card-title">Manage Blood Stocks</h3>
              <div className="FAicons FAiconsy">
                <i class="fas fa-chart-pie"></i>
              </div>
              <p className="card-content">
                You Can Manage your Blood Stocks here and can Update your Blood
                Stocks.
              </p>
              <Link to="/StockForm">
                <div className="marg">
                  <button className="card-btn6">Manage</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4 Stockdiv">
          <div className="welcome">
            <div className="content rounded-3 p-3">
              <h1 className="fs-3">Available Blood Stock</h1>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="chartcolor">
            <StockCharts />
          </div>
        </div>
        <Annoucenment />
        <Footer />
      </div>
    </>
  );
}

export default DAshboard;
